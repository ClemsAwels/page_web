import React, { createContext, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("currentUser")) || null
  );

  // Fonction de connexion
  const login = (email, password) => {
    const existingUsers = JSON.parse(localStorage.getItem("users")) || [];
    const foundUser = existingUsers.find(
      (user) => user.email === email && user.password === password
    );

    if (!foundUser) throw new Error("Identifiants incorrects");

    // Stocke l'utilisateur connecté
    localStorage.setItem("currentUser", JSON.stringify(foundUser));
    setUser(foundUser); // Met à jour immédiatement l'état
  };

  // Fonction de déconnexion
  const logout = () => {
    localStorage.removeItem("currentUser");
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
