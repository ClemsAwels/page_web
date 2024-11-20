import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import MenuPage from "./pages/MenuPage";
import ProtectedRoute from "./ProtectedRoute";
import { AuthProvider } from "./AuthContext";
import PageMaximus from "./pages/AppMaximus";
import PageMerlin from "./pages/AppMerlin";
import PageSuperMid from "./pages/AppSuperMid";

function App() {
  return (
    <AuthProvider>
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
    </AuthProvider>
  );
}

export default App;
