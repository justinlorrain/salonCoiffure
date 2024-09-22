import React from "react";
import { Link } from "react-router-dom";
import { Calendar, Users, Scissors, DollarSign, Settings } from "lucide-react";

const AdminDashboard = () => {
  const dashboardItems = [
    { title: "Planning", icon: Calendar, link: "/admin/planning" },
    { title: "Employés", icon: Users, link: "/admin/employees" },
    { title: "Services", icon: Scissors, link: "/admin/services" },
    { title: "Rapports", icon: DollarSign, link: "/admin/reports" },
    { title: "Paramètres", icon: Settings, link: "/admin/settings" },
  ];

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">
        Tableau de bord administrateur
      </h1>

      {/* Dashboard Items */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {dashboardItems.map((item, index) => (
          <Link
            key={index}
            to={item.link}
            className="bg-white shadow-md rounded-lg p-6 flex flex-col items-center justify-center hover:bg-blue-50 transition duration-300 transform hover:scale-105"
            aria-label={item.title}
          >
            <item.icon size={48} className="mb-4 text-blue-500" />
            <h2 className="text-xl font-semibold text-gray-800">
              {item.title}
            </h2>
          </Link>
        ))}
      </div>

      {/* Quick Overview */}
      <div className="mt-12">
        <h2 className="text-2xl font-semibold mb-4">Aperçu rapide</h2>
        <div className="bg-white shadow-md rounded-lg p-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="text-center">
              <h3 className="text-lg font-medium mb-2">
                Rendez-vous aujourd'hui
              </h3>
              <p className="text-3xl font-bold text-blue-500">12</p>
            </div>
            <div className="text-center">
              <h3 className="text-lg font-medium mb-2">Employés présents</h3>
              <p className="text-3xl font-bold text-green-500">5</p>
            </div>
            <div className="text-center">
              <h3 className="text-lg font-medium mb-2">
                Chiffre d'affaires du jour
              </h3>
              <p className="text-3xl font-bold text-purple-500">1250 €</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
