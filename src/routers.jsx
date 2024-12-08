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

function Routers() {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

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
                                <Route path="/" Component={Carros} />
                                <Route path="/detalhes/:id" Component={Detalhes} />
                                <Route path="/cadastrar" Component={Cadastrar} />
                                <Route path="/login" Component={Login} />
                                <Route path="/editar" Component={Editar} />
                            </>
                        ) : (
                            <Route path="*" element={<Navigate to="/login" replace />} />
                        )}
                        <Route path="/" Component={Carros} />
                        <Route path="/detalhes/:id" Component={Detalhes} />
                        <Route path="/cadastrar" Component={Cadastrar} />
                        <Route path="/login" Component={Login} />
                        <Route path="/editar" Component={Editar} />
                        <Route path="*" element={<h1>Not Found</h1>} />
                    </Routes>
                </Layout>
            </BrowserRouter>
        </Provider>
    )


}

export default Routers;