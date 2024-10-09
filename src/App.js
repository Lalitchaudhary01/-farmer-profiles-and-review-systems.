import { Routes, Route, Navigate } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import FarmerProfile from "./pages/FarmerProfile";

function App() {
  return (
    <>
      <Toaster /> {/* Notifications */}
      <Routes>
        {/* Define your routes */}
        <Route path="/" element={<Home />} />
        <Route path="/farmer/:id" element={<FarmerProfile />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<Navigate to="/login" />} />{" "}
        {/* Catch-all route */}
      </Routes>
    </>
  );
}

export default App;
