import { BrowserRouter, Routes, Route } from "react-router-dom";
import initial from "./pages/index";
import Cadastrar from "./pages/cadastrar";
import Detalhes from "./pages/detalhes";
import Carros from "./pages/carros";
import CarrosClassificados from "./pages/top";
import Login from "./pages/login";
import Layout from "./components/layout";
import { Provider } from "react-redux";
import { store } from "./store";

function Routers() {
    return (
        <Provider store={store}>
            <BrowserRouter basename="/">
                <Layout>
                    <Routes>
                        <Route path="/" Component={initial} />
                        <Route path="/detalhes/:id" Component={Detalhes} />
                        <Route path="/cadastrar" Component={Cadastrar} />
                        <Route path="/carros" Component={Carros} />
                        <Route path="/top-carros" Component={CarrosClassificados} />
                        <Route path="/login" Component={Login} />
                        <Route path="*" element={<h1>Not Found</h1>} />
                    </Routes>
                </Layout>
            </BrowserRouter>
        </Provider>
    )
}

export default Routers;