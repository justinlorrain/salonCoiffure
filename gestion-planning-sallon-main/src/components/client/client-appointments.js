import React from "react";
import {
  Calendar as CalendarIcon,
  Clock as ClockIcon,
  Scissors as ScissorsIcon,
} from "lucide-react";

const appointments = [
  { id: 1, date: "2024-09-25", time: "10:30 AM", service: "Coupe" },
  { id: 2, date: "2024-10-02", time: "2:00 PM", service: "Brushing" },
];

const ClientAppointments = () => {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Mes Rendez-vous</h1>
      <div className="bg-white shadow-md rounded-lg p-6">
        {appointments.length > 0 ? (
          <ul className="divide-y divide-gray-200">
            {appointments.map((appointment) => (
              <li key={appointment.id} className="flex items-center py-4">
                <div className="flex-shrink-0">
                  <ScissorsIcon size={24} className="text-blue-500" />
                </div>
                <div className="ml-4 flex-1">
                  <div className="text-lg font-semibold text-gray-800 flex items-center">
                    <CalendarIcon size={16} className="mr-2 text-blue-500" />
                    {appointment.date}
                  </div>
                  <div className="text-gray-600 flex items-center mt-1">
                    <ClockIcon size={16} className="mr-2 text-gray-500" />
                    {appointment.time}
                  </div>
                  <div className="text-gray-800 mt-1">
                    {appointment.service}
                  </div>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-600">Vous n'avez aucun rendez-vous prévu.</p>
        )}
      </div>
    </div>
  );
};

export default ClientAppointments;
