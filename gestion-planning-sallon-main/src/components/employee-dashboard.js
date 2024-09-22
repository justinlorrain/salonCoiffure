import React from "react";
import { Link } from "react-router-dom";
import { Calendar, User, Scissors, ClipboardCheck } from "lucide-react";

const EmployeeDashboard = () => {
  const dashboardItems = [
    {
      title: "Mes Rendez-vous",
      icon: Calendar,
      link: "/employee/appointments",
    },
    { title: "Mon Planning", icon: User, link: "/employee/schedule" },
    { title: "Mon Profil", icon: User, link: "/client/profile" },
    { title: "Services", icon: Scissors, link: "/employee/services" },
    { title: "Tâches du jour", icon: ClipboardCheck, link: "/employee/tasks" },
  ];

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Tableau de bord Employé</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {dashboardItems.map((item, index) => (
          <Link
            key={index}
            to={item.link}
            className="bg-white shadow-md rounded-lg p-6 flex flex-col items-center justify-center hover:bg-gray-50 transition duration-300"
          >
            <item.icon size={48} className="mb-4 text-blue-500" />
            <h2 className="text-xl font-semibold">{item.title}</h2>
          </Link>
        ))}
      </div>

      <div className="mt-12">
        <h2 className="text-2xl font-semibold mb-4">Aperçu rapide</h2>
        <div className="bg-white shadow-md rounded-lg p-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <h3 className="text-lg font-medium mb-2">
                Rendez-vous d'aujourd'hui
              </h3>
              <p className="text-3xl font-bold text-blue-500">8</p>
            </div>
            <div>
              <h3 className="text-lg font-medium mb-2">Tâches en attente</h3>
              <p className="text-3xl font-bold text-red-500">3</p>
            </div>
            <div>
              <h3 className="text-lg font-medium mb-2">Services Complétés</h3>
              <p className="text-3xl font-bold text-green-500">6</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmployeeDashboard;
