import React, { useEffect, useState } from "react";

const FarmerList = () => {
  const [farmers, setFarmers] = useState([]);

  useEffect(() => {
    // Simulating fetching farmers from an API
    const fetchFarmers = async () => {
      const response = await fetch("/api/farmers"); // Replace with actual API call
      const data = await response.json();
      setFarmers(data);
    };

    fetchFarmers();
  }, []);

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Farmers List</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {farmers.length === 0 ? (
          <p className="text-center col-span-3">No farmers found</p>
        ) : (
          farmers.map((farmer) => (
            <div key={farmer.id} className="bg-white shadow-lg rounded-lg p-6">
              <h2 className="text-xl font-semibold">{farmer.name}</h2>
              <p className="text-gray-600">{farmer.location}</p>
              <p className="text-gray-800 mt-2">{farmer.bio}</p>
              <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg">
                View Profile
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default FarmerList;
