import React from "react";
import { ClipboardCheck } from "lucide-react";

const tasks = [
  {
    id: 1,
    description: "Préparer la salle pour les rendez-vous",
    time: "08:00 AM",
  },
  { id: 2, description: "Vérifier les stocks de produits", time: "09:00 AM" },
  { id: 3, description: "Répondre aux e-mails et messages", time: "10:00 AM" },
  {
    id: 4,
    description: "Prévoir les pauses et les temps morts",
    time: "12:00 PM",
  },
];

const EmployeeTasks = () => {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Tâches du Jour</h1>
      <div className="bg-white shadow-md rounded-lg p-6">
        {tasks.length > 0 ? (
          <ul className="divide-y divide-gray-200">
            {tasks.map((task) => (
              <li key={task.id} className="flex items-center py-4">
                <div className="flex-shrink-0">
                  <ClipboardCheck size={24} className="text-blue-500" />
                </div>
                <div className="ml-4 flex-1">
                  <div className="text-lg font-semibold text-gray-800">
                    {task.description}
                  </div>
                  <div className="text-gray-600">À faire à: {task.time}</div>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-600">Aucune tâche prévue pour aujourd'hui.</p>
        )}
      </div>
    </div>
  );
};

export default EmployeeTasks;
