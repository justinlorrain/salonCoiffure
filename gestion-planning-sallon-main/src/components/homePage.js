import React from "react";
import { Link } from "react-router-dom";
import { Scissors, Calendar, User } from "lucide-react";

const HomePage = () => {
  return (
    <div className="container mx-auto text-center py-12">
      <h1 className="text-4xl font-bold mb-4">
        Bienvenue chez Salon de Coiffure
      </h1>
      <p className="text-lg mb-8">
        Gérez vos rendez-vous, consultez nos services et bien plus encore.
        Veuillez vous connecter ou créer un compte pour accéder à toutes nos
        fonctionnalités.
      </p>

      <div className="mb-12">
        <Link
          to="/login"
          className="bg-blue-500 text-white px-4 py-2 rounded mr-4"
        >
          Se connecter
        </Link>
        <Link
          to="/register"
          className="bg-gray-500 text-white px-4 py-2 rounded"
        >
          S'inscrire
        </Link>
      </div>

      <h2 className="text-3xl font-semibold mb-6">Nos Services</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-white shadow-lg rounded-lg p-6">
          <Scissors className="mx-auto text-blue-500" size={48} />
          <h3 className="text-xl font-semibold mt-4">Coupe de Cheveux</h3>
          <p className="text-gray-600 mt-2">
            Profitez d'une coupe moderne avec nos coiffeurs professionnels.
          </p>
        </div>
        <div className="bg-white shadow-lg rounded-lg p-6">
          <Calendar className="mx-auto text-green-500" size={48} />
          <h3 className="text-xl font-semibold mt-4">Prise de Rendez-vous</h3>
          <p className="text-gray-600 mt-2">
            Prenez rendez-vous en ligne à tout moment.
          </p>
        </div>
        <div className="bg-white shadow-lg rounded-lg p-6">
          <User className="mx-auto text-purple-500" size={48} />
          <h3 className="text-xl font-semibold mt-4">Soins Personnalisés</h3>
          <p className="text-gray-600 mt-2">
            Recevez des soins capillaires personnalisés adaptés à vos besoins.
          </p>
        </div>
      </div>

      <div className="mt-16">
        <h2 className="text-3xl font-semibold mb-6">
          Pourquoi choisir notre salon?
        </h2>
        <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto">
          Notre salon de coiffure offre une expérience haut de gamme avec des
          services de qualité, des coiffeurs experts, et un système de
          réservation facile à utiliser. Réservez une coupe, un brushing ou une
          coloration en quelques clics seulement, et gérez vos rendez-vous
          directement via notre application.
        </p>
      </div>
    </div>
  );
};

export default HomePage;
