import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { register } from "../api/register";

const RegisterForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await register(username, password);
      setMessage("");
      setSuccess("Inscription réussie ! Vous pouvez maintenant vous connecter.");
      setTimeout(() => {
        navigate("/login"); // Redirige vers la page de connexion après inscription
      }, 2000);
    } catch (error) {
      setMessage("");
      setError(error.message || "Une erreur est survenue.");
    }
  };

  const handleLoginRedirect = () => {
    navigate("/login"); // Redirige vers la page de connexion
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-gray-200">
      <h1 className="text-2xl font-bold mb-6">Créer un compte</h1>
      <form onSubmit={handleSubmit} className="w-full max-w-sm space-y-4">
        <input
          type="text"
          placeholder="Nom d'utilisateur"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full p-3 rounded bg-gray-800 text-gray-200"
        />
        <input
          type="password"
          placeholder="Mot de passe"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-3 rounded bg-gray-800 text-gray-200"
        />
        <button
          type="submit"
          className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-lg"
        >
          S'inscrire
        </button>
      </form>
      {error && <p className="text-red-500 mt-4">{error}</p>}
      {success && <p className="text-green-500 mt-4">{success}</p>}
      {message && <p className="text-gray-300 mt-4">{message}</p>}
      <p className="text-gray-400 mt-8">
        Vous avez déjà un compte ?{" "}
        <span
          onClick={handleLoginRedirect}
          className="text-blue-500 hover:underline cursor-pointer"
        >
          Connectez-vous ici
        </span>
      </p>
    </div>
  );
};

export default RegisterForm;
