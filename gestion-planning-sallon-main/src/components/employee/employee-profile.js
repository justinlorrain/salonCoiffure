import React, { useState } from "react";

const EmployeeProfile = () => {
  const [profile, setProfile] = useState({
    name: "Jean Dupont",
    email: "jean.dupont@example.com",
    phone: "123-456-7890",
  });

  const handleChange = (e) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Mon Profil</h1>
      <div className="bg-white shadow-md rounded-lg p-6">
        <form>
          <div className="mb-4">
            <label className="block text-gray-700">Nom</label>
            <input
              type="text"
              name="name"
              value={profile.name}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              value={profile.email}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Téléphone</label>
            <input
              type="tel"
              name="phone"
              value={profile.phone}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-md"
          >
            Sauvegarder
          </button>
        </form>
      </div>
    </div>
  );
};

export default EmployeeProfile;
