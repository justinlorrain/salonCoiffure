import React, { useState } from "react";

const ClientProfile = () => {
  const [profile, setProfile] = useState({
    name: "John Doe",
    email: "john.doe@example.com",
    phone: "123-456-7890",
  });

  const handleChange = (e) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    console.log("Profile updated:", profile);
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Mon Profil</h1>
      <div className="bg-white shadow-md rounded-lg p-6">
        <form>
          <div className="mb-4">
            <label className="block text-lg font-medium mb-2">Nom</label>
            <input
              type="text"
              name="name"
              value={profile.name}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-md"
            />
          </div>
          <div className="mb-4">
            <label className="block text-lg font-medium mb-2">Email</label>
            <input
              type="email"
              name="email"
              value={profile.email}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-md"
            />
          </div>
          <div className="mb-4">
            <label className="block text-lg font-medium mb-2">Téléphone</label>
            <input
              type="text"
              name="phone"
              value={profile.phone}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-md"
            />
          </div>
          <button
            type="button"
            onClick={handleSave}
            className="bg-blue-500 text-white px-4 py-2 rounded-md"
          >
            Sauvegarder
          </button>
        </form>
      </div>
    </div>
  );
};

export default ClientProfile;
