import { Link, useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  const farmers = [
    { id: 1, name: "Farmer A", bio: "Experienced in organic farming" },
    { id: 2, name: "Farmer B", bio: "Specializes in fruit cultivation" },
  ];
  const handleLogout = () => {
    navigate("/login");
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Farmers List</h2>
      <ul className="space-y-4">
        {farmers.map((farmer) => (
          <li key={farmer.id} className="bg-gray-100 p-4 rounded shadow">
            <Link to={`/farmer/${farmer.id}`} className="text-blue-500 text-lg">
              {farmer.name}
            </Link>
            <p>{farmer.bio}</p>
          </li>
        ))}
      </ul>
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
