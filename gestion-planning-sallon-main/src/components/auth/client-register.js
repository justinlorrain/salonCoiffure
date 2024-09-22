import React from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const schema = yup.object().shape({
  nom: yup.string().required("Le nom est requis"),
  prenom: yup.string().required("Le prénom est requis"),
  email: yup.string().email("Email invalide").required("L'email est requis"),
  login: yup
    .string()
    .required("Le login est requis")
    .min(5, "Le login doit contenir au moins 5 caractères")
    .max(15, "Le login ne doit pas dépasser 15 caractères"),
  phone: yup
    .string()
    .matches(/^[0-9]{10}$/, "Numéro de téléphone invalide")
    .required("Le numéro de téléphone est requis"),
  password: yup
    .string()
    .min(6, "Le mot de passe doit contenir au moins 6 caractères")
    .required("Le mot de passe est requis"),
  confirmPassword: yup
    .string()
    .oneOf(
      [yup.ref("password"), null],
      "Les mots de passe ne correspondent pas"
    )
    .required("La confirmation du mot de passe est requise"),
  role: yup.string().required("Le rôle est requis"), // Validation du rôle
});

const ClientRegister = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const [registrationStatus, setRegistrationStatus] = useState(null);

  const onSubmit = async (data) => {
    try {
      const response = await axios.post(
        "http://localhost:8080/clients/create",
        {
          nom: data.nom,
          prenom: data.prenom,
          email: data.email,
          login: data.login,
          numeroTelephone: data.phone,
          motDePasse: data.password,
          role: data.role, // Envoyer le rôle sélectionné par l'utilisateur
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log("Inscription réussie", response.data);
      setRegistrationStatus("Inscription réussie !");
    } catch (error) {
      console.error(
        "Erreur lors de l'inscription",
        error.response || error.message
      );
      setRegistrationStatus(
        "Erreur lors de la création du compte utilisateur."
      );
    }
  };

  return (
    <div className="p-6 max-w-md mx-auto bg-white shadow-md rounded-md">
      <h1 className="text-3xl font-bold mb-6">Créer un compte</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-4">
          <label
            htmlFor="nom"
            className="block text-sm font-medium text-gray-700"
          >
            Nom
          </label>
          <input
            id="nom"
            type="text"
            {...register("nom")}
            className="border border-gray-300 p-2 rounded-md w-full"
          />
          {errors.nom && (
            <p className="text-red-500 text-sm">{errors.nom.message}</p>
          )}
        </div>

        <div className="mb-4">
          <label
            htmlFor="prenom"
            className="block text-sm font-medium text-gray-700"
          >
            Prénom
          </label>
          <input
            id="prenom"
            type="text"
            {...register("prenom")}
            className="border border-gray-300 p-2 rounded-md w-full"
          />
          {errors.prenom && (
            <p className="text-red-500 text-sm">{errors.prenom.message}</p>
          )}
        </div>

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
            htmlFor="login"
            className="block text-sm font-medium text-gray-700"
          >
            Login
          </label>
          <input
            id="login"
            type="text"
            {...register("login")}
            className="border border-gray-300 p-2 rounded-md w-full"
          />
          {errors.login && (
            <p className="text-red-500 text-sm">{errors.login.message}</p>
          )}
        </div>

        <div className="mb-4">
          <label
            htmlFor="phone"
            className="block text-sm font-medium text-gray-700"
          >
            Numéro de téléphone
          </label>
          <input
            id="phone"
            type="text"
            {...register("phone")}
            className="border border-gray-300 p-2 rounded-md w-full"
          />
          {errors.phone && (
            <p className="text-red-500 text-sm">{errors.phone.message}</p>
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

        <div className="mb-4">
          <label
            htmlFor="confirmPassword"
            className="block text-sm font-medium text-gray-700"
          >
            Confirmer le mot de passe
          </label>
          <input
            id="confirmPassword"
            type="password"
            {...register("confirmPassword")}
            className="border border-gray-300 p-2 rounded-md w-full"
          />
          {errors.confirmPassword && (
            <p className="text-red-500 text-sm">
              {errors.confirmPassword.message}
            </p>
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
          Créer un compte
        </button>

        {registrationStatus && (
          <p className="mt-4 text-green-500">{registrationStatus}</p>
        )}
      </form>
    </div>
  );
};

export default ClientRegister;
