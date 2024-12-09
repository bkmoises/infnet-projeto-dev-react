import { createRoot } from "react-dom/client";
import Routers from "./routers";
import './index.css';
import 'sweetalert2/src/sweetalert2.scss';

const rootElement = document.getElementById("root");

if (rootElement) {
  createRoot(rootElement).render(<Routers />);
} else {
  console.error("Root element not found");
}
