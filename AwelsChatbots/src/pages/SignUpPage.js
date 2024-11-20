import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SignUpPage = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Récupérer les utilisateurs existants dans LocalStorage
    const existingUsers = JSON.parse(localStorage.getItem("users")) || [];

    // Vérifier si l'email est déjà utilisé
    const userExists = existingUsers.some((user) => user.email === email);
    if (userExists) {
      setError("Cet email est déjà utilisé.");
      return;
    }

    // Ajouter le nouvel utilisateur
    const newUser = { name, email, password };
    localStorage.setItem("users", JSON.stringify([...existingUsers, newUser]));

    setSuccess("Inscription réussie ! Vous pouvez maintenant vous connecter.");
    setTimeout(() => navigate("/login"), 2000); // Redirection vers la page de connexion
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-gray-200">
      <h1 className="text-2xl font-bold mb-6">Créer un compte</h1>
      <form onSubmit={handleSubmit} className="w-full max-w-sm space-y-4">
        <input
          type="text"
          placeholder="Nom"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full p-3 rounded bg-gray-800 text-gray-200"
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
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
    </div>
  );
};

export default SignUpPage;
