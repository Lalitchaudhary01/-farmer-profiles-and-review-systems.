import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import axios from "axios";

function Home() {
  const navigate = useNavigate();
  const [farmers, setFarmers] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch farmers from the API
  const fetchFarmers = async () => {
    const token = localStorage.getItem("authToken"); // Get token from local storage
    try {
      const response = await axios.get("http://localhost:8080/api/v1/farmers", {
        headers: {
          Authorization: `Bearer ${token}`, // Add token to headers if required
        },
      });
      setFarmers(response.data);
    } catch (error) {
      console.error("Error fetching farmers:", error);
      toast.error("Failed to load farmers. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchFarmers();
  }, []);

  const handleLogout = async () => {
    try {
      const token = localStorage.getItem("authToken"); // Get token from local storage
      if (!token) {
        toast.error("No user is logged in.");
        return;
      }

      // Logout API call
      await axios.get("http://localhost:8080/api/v1/user/logout", {
        headers: {
          Authorization: `Bearer ${token}`, // Pass token in headers
        },
      });

      localStorage.removeItem("authToken"); // Remove token on logout
      navigate("/login"); // Redirect to login page
      toast.success("Logged out successfully!");
    } catch (error) {
      console.error("Error logging out:", error);
      toast.error("Failed to log out. Please try again.");
    }
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Farmers List</h2>
      {loading ? (
        <p>Loading farmers...</p>
      ) : (
        <ul className="space-y-4">
          {farmers.length > 0 ? (
            farmers.map((farmer) => (
              <li key={farmer._id} className="bg-gray-100 p-4 rounded shadow">
                <Link
                  to={`/farmer/${farmer._id}`}
                  className="text-blue-500 text-lg"
                >
                  {farmer.fullName}
                </Link>
                <p>{farmer.bio}</p>
              </li>
            ))
          ) : (
            <p>No farmers found.</p>
          )}
        </ul>
      )}

      <div className="flex justify-center mt-6">
        <button
          onClick={handleLogout}
          className="bg-red-500 text-white p-3 rounded hover:bg-red-600"
        >
          Log Out
        </button>
      </div>
    </div>
  );
}

export default Home;
