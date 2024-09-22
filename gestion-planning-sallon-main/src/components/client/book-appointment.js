import React, { useState } from "react";

const services = [
  { id: 1, name: "Coupe", duration: "30 min" },
  { id: 2, name: "Brushing", duration: "30 min" },
  { id: 3, name: "Coloration", duration: "1h" },
];

const BookAppointment = () => {
  const [selectedService, setSelectedService] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  const handleSubmit = () => {
    console.log("Appointment booked:", { selectedService, date, time });
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Prendre RDV</h1>
      <div className="bg-white shadow-md rounded-lg p-6">
        <form>
          <div className="mb-4">
            <label className="block text-lg font-medium mb-2">Service</label>
            <select
              value={selectedService}
              onChange={(e) => setSelectedService(e.target.value)}
              className="w-full px-3 py-2 border rounded-md"
            >
              <option value="">Sélectionner un service</option>
              {services.map((service) => (
                <option key={service.id} value={service.name}>
                  {service.name} - {service.duration}
                </option>
              ))}
            </select>
          </div>
          <div className="mb-4">
            <label className="block text-lg font-medium mb-2">Date</label>
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="w-full px-3 py-2 border rounded-md"
            />
          </div>
          <div className="mb-4">
            <label className="block text-lg font-medium mb-2">Heure</label>
            <input
              type="time"
              value={time}
              onChange={(e) => setTime(e.target.value)}
              className="w-full px-3 py-2 border rounded-md"
            />
          </div>
          <button
            type="button"
            onClick={handleSubmit}
            className="bg-blue-500 text-white px-4 py-2 rounded-md"
          >
            Réserver
          </button>
        </form>
      </div>
    </div>
  );
};

export default BookAppointment;
