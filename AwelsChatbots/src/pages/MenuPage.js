import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function MenuPage() {
  const [user, setUser] = useState(null); // État pour stocker l'utilisateur
  const navigate = useNavigate();

  useEffect(() => {
    const fetchAuthStatus = async () => {
      try {
        const response = await axios.get("http://localhost:3001/check-auth", {
          withCredentials: true, // Inclus les cookies pour la session
        });
        if (response.data.authenticated) {
          setUser(response.data.user);
        } else {
          navigate("/login"); // Redirige si non authentifié
        }
      } catch (error) {
        console.error("Erreur lors de la vérification de l'authentification :", error);
        navigate("/login"); // Redirige en cas d'erreur
      }
    };

    fetchAuthStatus();
  }, [navigate]);

  const handleLogout = async () => {
    try {
      await axios.post("http://localhost:3001/logout", {}, { withCredentials: true });
      setUser(null); // Réinitialise l'utilisateur
      navigate("/login");
    } catch (error) {
      console.error("Erreur lors de la déconnexion :", error);
    }
  };

  return (
    <div className="flex flex-col min-h-screen items-center justify-center p-4 bg-gradient-to-b from-gray-800 to-gray-900 text-gray-200">
      <h1 className="text-3xl md:text-5xl font-extrabold text-blue-400 mb-8">
        Bienvenue, {user ? user.username : "Invité"} !
      </h1>
      <p className="text-lg md:text-xl text-gray-300 mb-6">
        Sélectionnez une page pour commencer.
      </p>
      <div className="flex flex-col space-y-4 w-full max-w-md">
        <Link to="/Maximus">
          <button className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-lg shadow-lg transition">
            Page Maximus
          </button>
        </Link>
        <Link to="/Merlin">
          <button className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-lg shadow-lg transition">
            Page Merlin
          </button>
        </Link>
        <Link to="/Supermid">
          <button className="w-full bg-red-500 hover:bg-red-600 text-white font-bold py-3 px-6 rounded-lg shadow-lg transition">
            Page SuperMid
          </button>
        </Link>
        {user && (
          <button
            onClick={handleLogout}
            className="w-full bg-gray-700 hover:bg-gray-800 text-white font-bold py-3 px-6 rounded-lg shadow-lg transition"
          >
            Se déconnecter
          </button>
        )}
      </div>
    </div>
  );
}

export default MenuPage;
