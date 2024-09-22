import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Menu,
  X,
  User,
  Calendar,
  Scissors,
  DollarSign,
  LogOut,
} from "lucide-react";

const Header = ({ userType }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const renderNavLinks = () => {
    switch (userType) {
      case "admin":
        return (
          <>
            <Link
              to="/admin/dashboard"
              className="flex items-center px-3 py-2 rounded-md hover:bg-gray-700"
            >
              <Calendar className="mr-2" size={18} />
              Planning
            </Link>
            <Link
              to="/admin/employees"
              className="flex items-center px-3 py-2 rounded-md hover:bg-gray-700"
            >
              <User className="mr-2" size={18} />
              Employés
            </Link>
            <Link
              to="/admin/services"
              className="flex items-center px-3 py-2 rounded-md hover:bg-gray-700"
            >
              <Scissors className="mr-2" size={18} />
              Services
            </Link>
          </>
        );
      case "employee":
        return (
          <>
            <Link
              to="/employee/appointments"
              className="flex items-center px-3 py-2 rounded-md hover:bg-gray-700"
            >
              <Calendar className="mr-2" size={18} />
              Rendez-vous
            </Link>
            <Link
              to="/employee/schedule"
              className="flex items-center px-3 py-2 rounded-md hover:bg-gray-700"
            >
              <User className="mr-2" size={18} />
              Mon planning
            </Link>
          </>
        );
      case "client":
        return (
          <>
            <Link
              to="/client/appointments"
              className="flex items-center px-3 py-2 rounded-md hover:bg-gray-700"
            >
              <Calendar className="mr-2" size={18} />
              Mes rendez-vous
            </Link>
            <Link
              to="/client/book"
              className="flex items-center px-3 py-2 rounded-md hover:bg-gray-700"
            >
              <Scissors className="mr-2" size={18} />
              Prendre RDV
            </Link>
          </>
        );
      default:
        return (
          <>
            <Link
              to="/login"
              className="flex items-center px-3 py-2 rounded-md hover:bg-gray-700"
            >
              Login
            </Link>
            <Link
              to="/register"
              className="flex items-center px-3 py-2 rounded-md hover:bg-gray-700"
            >
              Register
            </Link>
          </>
        );
    }
  };

  return (
    <header className="bg-gray-800 text-white">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          <Link to="/" className="text-xl font-bold">
            Salon de Coiffure
          </Link>
          <nav className="hidden md:flex space-x-4">
            {renderNavLinks()}
            {userType && (
              <button className="flex items-center px-3 py-2 rounded-md hover:bg-gray-700">
                <LogOut className="mr-2" size={18} />
                Déconnexion
              </button>
            )}
          </nav>
          <button className="md:hidden" onClick={toggleMenu}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden">
          <nav className="px-2 pt-2 pb-4 space-y-1">
            {renderNavLinks()}
            {userType && (
              <button className="flex items-center w-full px-3 py-2 rounded-md hover:bg-gray-700">
                <LogOut className="mr-2" size={18} />
                Déconnexion
              </button>
            )}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
