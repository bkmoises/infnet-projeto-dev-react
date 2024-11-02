import { createRoot } from "react-dom/client";
import Routers from "./routers";
import './index.css'
import 'sweetalert2/src/sweetalert2.scss'

createRoot(document.getElementById("root")).render(<Routers />);
