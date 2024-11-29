import React, { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";
import axios from "axios";

const backendURL = process.env.REACT_APP_BACKEND_URL;
const ProtectedRoute = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(null); // Null pour attendre la réponse du serveur

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const response = await axios.get(`${backendURL}/check-auth`, {
          withCredentials: true, // Important pour gérer les cookies si nécessaire
        });
        setIsAuthenticated(response.data.authenticated);
      } catch (error) {
        setIsAuthenticated(false);
      }
    };

    checkAuth();
  }, []);

  if (isAuthenticated === null) {
    // En attente de la réponse du serveur
    return <div>Chargement...</div>;
  }

  if (!isAuthenticated) {
    // Redirige vers la page de login si l'utilisateur n'est pas authentifié
    return <Navigate to="/login" />;
  }

  return children; // Rend la route si l'utilisateur est authentifié
};

export default ProtectedRoute;
