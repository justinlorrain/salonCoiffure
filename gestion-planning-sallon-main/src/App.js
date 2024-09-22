import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import { Home } from "lucide-react";

// // Composants pour les différents types d'utilisateurs
import AdminDashboard from "./components/admin-dashboard";
import EmployeeDashboard from "./components/employee-dashboard";
import ClientDashboard from "./components/client-dashboard";

// // Composants partagés
import Header from "./components/shared/header";

// Composants pour le client
import ClientProfile from "./components/client/client-profile";
import ClientAppointments from "./components/client/client-appointments";
import BookAppointment from "./components/client/book-appointment";
import Agenda from "./components/client/agenda";

// Composants pour l'employee
import EmployeeAppointments from "./components/employee/employee-appointments";
import EmployeeProfile from "./components/employee/employee-profile";
import EmployeeSchedule from "./components/employee/employee-schedule";
import EmployeeTasks from "./components/employee/employee-tasks";
import EmployeeServices from "./components/employee/employee-services";

// Composants pour l'admin
import AdminEmployees from "./components/admin/admin-employees";
import AdminServices from "./components/admin/admin-services";
import AdminSettings from "./components/admin/admin-settings";
import AdminReports from "./components/admin/admin-reports";

// // Composants pour l'authentification du client
import ClientRegister from "./components/auth/client-register";
import ClientLogin from "./components/auth/client-login";
import Billing from "./components/billing/billing";

import HomePage from "./components/homePage";

const App = () => {
  // const userType = "admin";
  // const userType = "employee";
  const userType = "null";
  // const userType = "client";
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header userType={userType} />
        <main className="flex-grow container mx-auto px-4 py-8">
          <Routes>
            <Route path="/register" element={<ClientRegister />} />
            <Route path="/login" element={<ClientLogin />} />
            <Route path="/billing" element={<Billing />} />

            <Route
              path="/"
              element={
                userType !== "null" ? (
                  <Navigate to={`/${userType}`} />
                ) : (
                  <HomePage />
                )
              }
            />

            {/* Redirect based on user type */}
            <Route
              path="/"
              element={
                userType === "admin" ? (
                  <Navigate to="/admin" />
                ) : userType === "employee" ? (
                  <Navigate to="/employee" />
                ) : userType === "client" ? (
                  <Navigate to="/client" />
                ) : (
                  <Home />
                )
              }
            />

            {/* Admin dashboard routes */}
            <Route path="/admin" element={<AdminDashboard />} />
            <Route path="/admin/employees" element={<AdminEmployees />} />
            <Route path="/admin/services" element={<AdminServices />} />
            <Route path="/admin/settings" element={<AdminSettings />} />
            <Route path="/admin/reports" element={<AdminReports />} />

            {/* Employee dashboard routes */}
            <Route path="/employee" element={<EmployeeDashboard />} />
            <Route
              path="/employee/appointments"
              element={<EmployeeAppointments />}
            />

            {/* Employee  routes */}
            <Route path="/employee/profile" element={<EmployeeProfile />} />
            <Route path="/employee/schedule" element={<EmployeeSchedule />} />
            <Route path="/employee/tasks" element={<EmployeeTasks />} />
            <Route path="/employee/services" element={<EmployeeServices />} />

            {/* Client dashboard routes */}
            <Route path="/client" element={<ClientDashboard />} />
            <Route path="/client/profile" element={<ClientProfile />} />
            <Route
              path="/client/appointments"
              element={<ClientAppointments />}
            />
            <Route path="/client/book" element={<BookAppointment />} />
            <Route path="/client/agenda" element={<Agenda />} />

            {/* Fallback route for undefined paths */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        {/* <Footer /> */}
      </div>
    </Router>
  );
};

const NotFound = () => {
  return <h1>404 - Page Not Found</h1>;
};

export default App;
