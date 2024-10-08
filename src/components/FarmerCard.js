import React, { useState, useEffect } from "react";
import FarmerCard from "./FarmerCard"; // Import the FarmerCard component

const FarmerList = () => {
  const [farmers, setFarmers] = useState([]);

  useEffect(() => {
    const fetchFarmers = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/farmers");
        const data = await response.json();
        setFarmers(data);
      } catch (error) {
        console.error("Error fetching farmers:", error);
      }
    };

    fetchFarmers();
  }, []);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
      {farmers.map((farmer) => (
        <FarmerCard key={farmer.id} farmer={farmer} />
      ))}
    </div>
  );
};

export default FarmerList;
