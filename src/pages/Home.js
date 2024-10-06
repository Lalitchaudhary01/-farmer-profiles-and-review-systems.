import { Link } from "react-router-dom";

function Home() {
  const farmers = [
    { id: 1, name: "Farmer A", bio: "Experienced in organic farming" },
    { id: 2, name: "Farmer B", bio: "Specializes in fruit cultivation" },
  ];

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
    </div>
  );
}

export default Home;
