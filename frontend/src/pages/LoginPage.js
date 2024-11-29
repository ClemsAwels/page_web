import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();
  const backendURL = process.env.REACT_APP_BACKEND_URL;

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      console.log(backendURL)
      const response = await axios.post(
        `${backendURL}/login`,
        { username, password },
        { withCredentials: true } // Important pour inclure les cookies
      );

      if (response.status === 200) {
        navigate("/"); // Redirige vers la page Menu après un login réussi
      }
    } catch (error) {
      setMessage(error.response?.data?.message || "Une erreur est survenue");
    }
  };

  const handleRegisterRedirect = () => {
    navigate("/register"); // Redirige vers la page d'inscription
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-gray-200">
      <h1 className="text-3xl font-bold mb-8">Connexion</h1>
      <form onSubmit={handleSubmit} className="w-full max-w-sm space-y-6">
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
          Se connecter
        </button>
      </form>
      {message && <p className="text-red-500 mt-4">{message}</p>}
      <p className="text-gray-400 mt-8">
        Pas encore de compte ?{" "}
        <span
          onClick={handleRegisterRedirect}
          className="text-blue-500 hover:underline cursor-pointer"
        >
          Inscrivez-vous ici
        </span>
      </p>
    </div>
  );
};

export default LoginPage;
