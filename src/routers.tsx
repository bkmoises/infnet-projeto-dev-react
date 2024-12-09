import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Editar from "./pages/Editar";
import Cadastrar from "./pages/Cadastrar";
import Detalhes from "./pages/Detalhes";
import Carros from "./pages/Carros";
import Login from "./pages/Login";
import Layout from "./components/Layout";
import { Provider } from "react-redux";
import { store } from "./store";
import React, { useState, useEffect } from "react";
import Logout from "./components/Logout";

const Routers: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);
  
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

  if (isAuthenticated === null) {
    return <div>Loading...</div>;
  }

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

            <Route path="*" element={<h1>Not Found</h1>} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </Provider>
  );
};

export default Routers;
