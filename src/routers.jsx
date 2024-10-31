import { BrowserRouter, Routes, Route } from "react-router-dom";
import initial from "./pages/index";
import Avaliar from "./pages/avaliar";
import Detalhes from "./pages/detalhes";
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
                    </Routes>
                </Layout>
            </BrowserRouter>
        </Provider>
    )
}

export default Routers;