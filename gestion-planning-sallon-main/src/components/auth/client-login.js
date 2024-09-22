import React from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom"; // Importez useNavigate

const schema = yup.object().shape({
  email: yup.string().email("Email invalide").required("L'email est requis"),
  password: yup
    .string()
    .min(6, "Le mot de passe doit contenir au moins 6 caractères")
    .required("Le mot de passe est requis"),
  role: yup.string().required("Le rôle est requis"), // Validation du rôle
});

const Login = () => {
  const navigate = useNavigate(); // Initialisez useNavigate
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const [loginStatus, setLoginStatus] = useState(null);

  const onSubmit = async (data) => {
    try {
      // En fonction du rôle sélectionné, on ajuste l'URL pour l'authentification
      let url;
      if (data.role === "CLIENT") {
        url = "http://localhost:8080/clients/login";
      } else if (data.role === "EMPLOYE") {
        url = "http://localhost:8080/api/employes/login";
      } else if (data.role === "ADMINISTRATEUR") {
        url = "http://localhost:8080/administrateurs/login";
      }

      const response = await axios.post(url, {
        email: data.email,
        motDePasse: data.password,
      });

      setLoginStatus("Connexion réussie !");
      // Stockez les informations utilisateur ici si nécessaire

      // Redirection basée sur le rôle sélectionné
      if (data.role === "CLIENT") {
        navigate("/client/agenda");
      } else if (data.role === "EMPLOYE") {
        navigate("/employee");
      } else if (data.role === "ADMINISTRATEUR") {
        navigate("/admin");
      }
    } catch (error) {
      setLoginStatus("Erreur lors de la connexion.");
    }
  };

  return (
    <div className="p-6 max-w-md mx-auto bg-white shadow-md rounded-md">
      <h1 className="text-3xl font-bold mb-6">Se connecter</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            Email
          </label>
          <input
            id="email"
            type="email"
            {...register("email")}
            className="border border-gray-300 p-2 rounded-md w-full"
          />
          {errors.email && (
            <p className="text-red-500 text-sm">{errors.email.message}</p>
          )}
        </div>

        <div className="mb-4">
          <label
            htmlFor="password"
            className="block text-sm font-medium text-gray-700"
          >
            Mot de passe
          </label>
          <input
            id="password"
            type="password"
            {...register("password")}
            className="border border-gray-300 p-2 rounded-md w-full"
          />
          {errors.password && (
            <p className="text-red-500 text-sm">{errors.password.message}</p>
          )}
        </div>

        {/* Sélection du rôle */}
        <div className="mb-4">
          <label
            htmlFor="role"
            className="block text-sm font-medium text-gray-700"
          >
            Rôle
          </label>
          <select
            id="role"
            {...register("role")}
            className="border border-gray-300 p-2 rounded-md w-full"
          >
            <option value="">Sélectionnez un rôle</option>
            <option value="CLIENT">Client</option>
            <option value="EMPLOYE">Employé</option>
            <option value="ADMINISTRATEUR">Administrateur</option>
          </select>
          {errors.role && (
            <p className="text-red-500 text-sm">{errors.role.message}</p>
          )}
        </div>

        <button
          type="submit"
          className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-300"
        >
          Se connecter
        </button>

        {loginStatus && <p className="mt-4 text-green-500">{loginStatus}</p>}
      </form>
    </div>
  );
};

export default Login;
