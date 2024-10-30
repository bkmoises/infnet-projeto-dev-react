import { BrowserRouter, Routes, Route  } from "react-router-dom";
import initial from "./pages/index";
import Avaliar from "./pages/avaliar";
import Detalhes from "./pages/detalhes";
import Layout from "./components/layout";

function Routers() {
    return (
        <BrowserRouter basename="/">
            <Layout>
            <Routes>
                <Route path="/" Component={initial}/>
                <Route path="/detalhes/:id" Component={Detalhes}/>
                <Route path="/avaliar" Component={Avaliar} />
            </Routes>

            </Layout>
        </BrowserRouter>
    )
}

export default Routers;