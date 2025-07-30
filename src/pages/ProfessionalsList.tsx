import { usePortfolio } from "../context/usePortfolio";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const ProfessionalsList = () => {
  const { portfolios } = usePortfolio();
  const navigate = useNavigate();
  const [filterSkill, setFilterSkill] = useState("");
  const [filterRole, setFilterRole] = useState("");

  const filtered = portfolios.filter((p) => {
    return (
      (!filterSkill || p.skills.includes(filterSkill)) &&
      (!filterRole ||
        p.hero.title.toLowerCase().includes(filterRole.toLowerCase()))
    );
  });

  const editProfile = (id: string) => {
    localStorage.setItem("editId", id);
    navigate("/form");
  };

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Professionals</h2>

      <div className="flex gap-4 mb-4">
        <input
          type="text"
          placeholder="Filter by skill"
          value={filterSkill}
          onChange={(e) => setFilterSkill(e.target.value)}
          className="input"
        />
        <input
          type="text"
          placeholder="Filter by role"
          value={filterRole}
          onChange={(e) => setFilterRole(e.target.value)}
          className="input"
        />
      </div>

      <div className="grid gap-4">
        {filtered.map((p) => (
          <div key={p.id} className="border p-4 shadow rounded">
            <h3 className="text-lg font-semibold">{p.hero.name}</h3>
            <p className="text-sm text-gray-500">{p.hero.title}</p>
            <p className="text-gray-600 text-sm">{p.about.bio}</p>
            <div className="flex gap-2 mt-2">
              <button
                onClick={() => navigate(`/portfolio/${p.id}`)}
                className="bg-green-600 text-white px-3 py-1 rounded text-sm"
              >
                View Portfolio
              </button>
              <button
                onClick={() => editProfile(p.id)}
                className="bg-yellow-500 text-white px-3 py-1 rounded text-sm"
              >
                Edit
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProfessionalsList;
