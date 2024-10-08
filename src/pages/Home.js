import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast"; // Importing toast for notifications
import axios from "axios"; // Importing axios for API calls
import { useAuth } from "../AuthContext"; // Importing useAuth

function Home() {
  const navigate = useNavigate();
  const { logout } = useAuth(); // Access the logout function from context
  const [farmers, setFarmers] = useState([]);
  const [loading, setLoading] = useState(true); // Loading state

  // Fetch farmers from the API
  const fetchFarmers = async () => {
    try {
      const response = await axios.get("/api/farmers"); // Replace with your actual API endpoint
      setFarmers(response.data); // Set the farmers data
    } catch (error) {
      console.error("Error fetching farmers:", error);
      toast.error("Failed to load farmers. Please try again.");
    } finally {
      setLoading(false); // Set loading to false regardless of success or failure
    }
  };

  useEffect(() => {
    fetchFarmers(); // Fetch farmers when the component mounts
  }, []);

  const handleLogout = () => {
    logout(); // Call the logout function from context
    navigate("/login"); // Redirect to login page
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Farmers List</h2>
      {loading ? ( // Display loading state while fetching data
        <p>Loading farmers...</p>
      ) : (
        <ul className="space-y-4">
          {farmers.length > 0 ? (
            farmers.map((farmer) => (
              <li key={farmer.id} className="bg-gray-100 p-4 rounded shadow">
                <Link
                  to={`/farmer/${farmer.id}`}
                  className="text-blue-500 text-lg"
                >
                  {farmer.name}
                </Link>
                <p>{farmer.bio}</p>
              </li>
            ))
          ) : (
            <p>No farmers found.</p> // Message if no farmers are available
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
