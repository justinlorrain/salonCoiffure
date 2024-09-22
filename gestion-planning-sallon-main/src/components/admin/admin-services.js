import React from "react";

const services = [
  { id: 1, name: "Coupe", duration: "30 min", price: "20 €" },
  { id: 2, name: "Brushing", duration: "30 min", price: "25 €" },
  { id: 3, name: "Coloration", duration: "1 h", price: "50 €" },
  { id: 4, name: "Soins", duration: "45 min", price: "30 €" },
];

const AdminServices = () => {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Services</h1>
      <div className="bg-white shadow-md rounded-lg p-6">
        <ul>
          {services.map((service) => (
            <li key={service.id} className="mb-4 border-b pb-4">
              <div className="text-lg font-semibold">{service.name}</div>
              <div className="text-gray-600">Durée: {service.duration}</div>
              <div className="text-gray-800">Prix: {service.price}</div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AdminServices;
