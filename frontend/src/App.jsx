import React from "react";
import { BrowserRouter, Route, Navigate, Routes } from "react-router-dom";
import AuthPage from "./pages/AuthPage";
import NotFound from "./pages/NotFound";
import Home from "./pages/Home";
import ProtectedRoute from "./components/ProtectedRoute";

function Logout() {
  localStorage.clear();
  return <Navigate to="/login" />;
}

function RegisterAndLogout() {
  localStorage.clear();
  return <Register />;
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />
        <Route path="/auth" element={<AuthPage />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
