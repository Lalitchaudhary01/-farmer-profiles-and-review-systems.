import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import FarmerProfile from "./pages/FarmerProfile";
import { useAuth, AuthProvider } from "./AuthContext"; // Importing useAuth and AuthProvider

function App() {
  const { user } = useAuth(); // Getting user from the AuthContext

  return (
    <Router>
      <Toaster /> {/* For toast notifications */}
      <Routes>
        {/* If the user is not logged in, redirect to the login page */}
        <Route path="/login" element={user ? <Navigate to="/" /> : <Login />} />
        <Route
          path="/register"
          element={user ? <Navigate to="/" /> : <Register />}
        />
        <Route path="/" element={user ? <Home /> : <Navigate to="/login" />} />
        <Route
          path="/farmer/:id"
          element={user ? <FarmerProfile /> : <Navigate to="/login" />}
        />

        {/* Redirect from any other root path to /login */}
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </Router>
  );
}

export default function AppWithProvider() {
  return (
    <AuthProvider>
      {" "}
      {/* Wrapping the App component with AuthProvider */}
      <App />
    </AuthProvider>
  );
}
