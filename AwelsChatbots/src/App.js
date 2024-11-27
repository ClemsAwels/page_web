import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import MenuPage from "./pages/MenuPage";
import ProtectedRoute from "./ProtectedRoute"; // Vérifie directement l'authentification avec le backend
import PageMaximus from "./pages/AppMaximus";
import PageMerlin from "./pages/AppMerlin";
import PageSuperMid from "./pages/AppSuperMid";
import PageColbert from "./pages/AppColbert";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<SignUpPage />} />
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <MenuPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/Maximus"
          element={
            <ProtectedRoute>
              <PageMaximus />
            </ProtectedRoute>
          }
        />
        <Route
          path="/Colbert"
          element={
            <ProtectedRoute>
              <PageColbert />
            </ProtectedRoute>
          }
        />
        <Route
          path="/Merlin"
          element={
            <ProtectedRoute>
              <PageMerlin />
            </ProtectedRoute>
          }
        />
        <Route
          path="/Supermid"
          element={
            <ProtectedRoute>
              <PageSuperMid />
            </ProtectedRoute>
          }
        />
        <Route path="*" element={<div>404 : Page non trouvée</div>} />
      </Routes>
    </Router>
  );
}

export default App;
