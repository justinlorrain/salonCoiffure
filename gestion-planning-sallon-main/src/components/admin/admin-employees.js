import React from "react";

const employees = [
  { id: 1, name: "John Doe", position: "Coiffeur", status: "Actif" },
  { id: 2, name: "Jane Smith", position: "Assistant", status: "En congé" },
];

const AdminEmployees = () => {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Employés</h1>
      <div className="bg-white shadow-md rounded-lg p-6">
        <ul>
          {employees.map((employee) => (
            <li key={employee.id} className="mb-4 border-b pb-4">
              <div className="text-lg font-semibold">{employee.name}</div>
              <div className="text-gray-600">Position: {employee.position}</div>
              <div className="text-gray-800">Status: {employee.status}</div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AdminEmployees;
