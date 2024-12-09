import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Editar from "./pages/editar";
import Cadastrar from "./pages/cadastrar";
import Detalhes from "./pages/detalhes";
import Carros from "./pages/carros";
import Login from "./pages/login";
import Layout from "./components/layout";
import { Provider } from "react-redux";
import { store } from "./store";
import React, { useState, useEffect } from "react";
import Logout from "./components/logout";

const Routers: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

  useEffect(() => {
    const token = localStorage.getItem("authToken");
    setIsAuthenticated(!!token);
  }, []);

  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    setIsAuthenticated(false);
  };

  return (
    <Provider store={store}>
      <BrowserRouter basename="/">
        <Layout>
          <Routes>
            <Route path="/login" element={<Login onLogin={handleLogin} />} />
            <Route path="/logout" element={<Logout onLogout={handleLogout} />} />
            {isAuthenticated ? (
              <>
                <Route path="/" element={<Carros />} />
                <Route path="/detalhes/:id" element={<Detalhes />} />
                <Route path="/cadastrar" element={<Cadastrar />} />
                <Route path="/editar" element={<Editar />} />
              </>
            ) : (
              <Route path="*" element={<Navigate to="/login" replace />} />
            )}
            {/* Rotas públicas */}
            <Route path="/" element={<Carros />} />
            <Route path="/detalhes/:id" element={<Detalhes />} />
            <Route path="/cadastrar" element={<Cadastrar />} />
            <Route path="/editar" element={<Editar />} />
            <Route path="*" element={<h1>Not Found</h1>} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </Provider>
  );
};

export default Routers;
