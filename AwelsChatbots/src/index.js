import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App"; // App.js contient les routes définies avec React Router
import "./index.css"; // Fichier CSS global pour les styles de base

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
