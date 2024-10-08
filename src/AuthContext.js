import { createContext, useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

// Create the context
const AuthContext = createContext();

// AuthProvider component that wraps your app and provides the auth context to other components
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  // Function to log in the user (you can modify this with your API call)
  const login = (email, password) => {
    // Simulate an API call and set the user (replace with actual authentication logic)
    const mockUser = { email: email, name: "John Doe" }; // Replace this with real user data from API
    setUser(mockUser);
    navigate("/"); // Redirect to the home page after login
  };

  // Function to log out the user
  const logout = () => {
    setUser(null); // Clear the user state
    navigate("/login"); // Redirect to login page after logout
  };

  // Function to check if user is authenticated (e.g., on page refresh)
  useEffect(() => {
    // You can add logic to check if a user is already authenticated (like checking a token)
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser)); // Set the stored user in state
    }
  }, []);

  // Provide user and auth functions to the context consumers
  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook to use the auth context
export const useAuth = () => {
  return useContext(AuthContext);
};
