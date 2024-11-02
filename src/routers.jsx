import { BrowserRouter, Routes, Route } from "react-router-dom";
import initial from "./pages/index";
import Avaliar from "./pages/avaliar";
import Detalhes from "./pages/detalhes";
import Filmes from "./pages/filmes";
import FilmesClassificados from "./pages/top";
import Contato from "./pages/contato";
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
                        <Route path="/avaliar" Component={Avaliar} />
                        <Route path="/filmes" Component={Filmes} />
                        <Route path="/top-filmes" Component={FilmesClassificados} />
                        <Route path="/contato" Component={Contato} />
                        <Route path="*" element={<h1>Not Found</h1>} />
                    </Routes>
                </Layout>
            </BrowserRouter>
        </Provider>
    )
}

export default Routers;