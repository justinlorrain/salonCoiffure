import React, { useState } from "react";

// Sample services data
const services = [
  { id: 1, name: "Coupe", price: 30 },
  { id: 2, name: "Brushing", price: 20 },
  { id: 3, name: "Coloration", price: 50 },
];

const Billing = () => {
  const [selectedServices, setSelectedServices] = useState([]);
  const [paymentStatus, setPaymentStatus] = useState(null);

  const handleServiceSelection = (service) => {
    setSelectedServices((prevServices) =>
      prevServices.includes(service)
        ? prevServices.filter((s) => s !== service)
        : [...prevServices, service]
    );
  };

  const calculateTotal = () => {
    return selectedServices.reduce(
      (total, service) => total + service.price,
      0
    );
  };

  const handlePayment = () => {
    // Simulation de paiment reussie
    setPaymentStatus("Paiement réussi !");
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Facturation</h1>

      <div className="bg-white shadow-md rounded-lg p-6">
        <h2 className="text-xl font-semibold mb-4">Services rendus</h2>

        <ul className="mb-6">
          {services.map((service) => (
            <li key={service.id} className="mb-4">
              <div className="flex justify-between items-center">
                <div className="text-lg">{service.name}</div>
                <div className="text-lg font-bold">{service.price} €</div>
                <button
                  onClick={() => handleServiceSelection(service)}
                  className={`ml-4 px-4 py-2 rounded-md ${
                    selectedServices.includes(service)
                      ? "bg-red-500 text-white"
                      : "bg-blue-500 text-white"
                  }`}
                >
                  {selectedServices.includes(service) ? "Retirer" : "Ajouter"}
                </button>
              </div>
            </li>
          ))}
        </ul>

        <div className="border-t pt-4 flex justify-between items-center">
          <span className="text-lg font-semibold">Total :</span>
          <span className="text-2xl font-bold">{calculateTotal()} €</span>
        </div>

        <button
          onClick={handlePayment}
          className="mt-6 w-full bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition duration-300"
        >
          Payer
        </button>

        {paymentStatus && (
          <p className="mt-4 text-green-500">{paymentStatus}</p>
        )}
      </div>
    </div>
  );
};

export default Billing;
