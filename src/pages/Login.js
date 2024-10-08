// Login.js
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { useAuth } from "../AuthContext";

function Login() {
  const [username, setUsername] = useState(""); // Changed to username
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { login } = useAuth(); // Access the login function

  const handleLogin = async (e) => {
    e.preventDefault();

    // Prepare the payload
    const payload = {
      username,
      password,
    };

    try {
      const response = await fetch("http://localhost:8080/api/v1/user/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error("Invalid credentials!"); // Handle non-200 responses
      }

      const data = await response.json();
      if (data.success) {
        // Adjust based on your API response structure
        toast.success("Logged in successfully!");
        login(); // Call login function from context
        navigate("/"); // Redirect to home page on successful login
      } else {
        toast.error("Invalid credentials!"); // Handle API error response
      }
    } catch (error) {
      toast.error(error.message); // Display error message
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
        <form onSubmit={handleLogin}>
          <input
            type="text" // Changed to text for username
            placeholder="Username"
            value={username} // Use username instead of email
            onChange={(e) => setUsername(e.target.value)}
            className="w-full p-3 border rounded mb-4"
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-3 border rounded mb-6"
            required
          />
          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-3 rounded hover:bg-blue-600"
          >
            Login
          </button>
        </form>
        <p className="mt-4 text-center">
          Don't have an account?{" "}
          <a href="/register" className="text-blue-500">
            Register
          </a>
        </p>
      </div>
    </div>
  );
}

export default Login;
