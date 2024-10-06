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
import FarmerProfile from "./components/FarmerProfile";

function App() {
  return (
    <Router>
      <Toaster /> {/* For toast notifications */}
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/farmer/:id" element={<FarmerProfile />} />
      </Routes>
    </Router>
  );
}

export default App;
