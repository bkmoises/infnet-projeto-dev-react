import React, { useEffect } from "react";
import Table from "../components/table";
import { useDispatch } from "react-redux";
import { getAllCars } from "../store/slices/car/actions";
import { AppDispatch } from "../store";  // Tipando o dispatch

const App: React.FC = () => {
    const dispatch = useDispatch<AppDispatch>();  // Tipando o dispatch para o tipo específico da aplicação

    useEffect(() => {
        const link = document.querySelector("link[rel~='icon']");
        if (link) {
            link.href = "/icon.png";
        }

        dispatch(getAllCars());
    }, [dispatch]);

    return <Table />;
}

export default App;
