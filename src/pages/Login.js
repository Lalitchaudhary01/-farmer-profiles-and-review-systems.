// Login.js
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { useAuth } from "../AuthContext"; // Import useAuth

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { login } = useAuth(); // Access the login function

  const handleLogin = (e) => {
    e.preventDefault();
    // Mock login logic
    if (email === "test1@email.com" && password === "password") {
      toast.success("Logged in successfully!");
      login(); // Call login function from context
      navigate("/"); // Redirect to home page on successful login
    } else {
      toast.error("Invalid credentials!");
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
        <form onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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
