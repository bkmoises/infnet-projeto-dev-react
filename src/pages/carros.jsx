import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllCars } from "../store/slices/car/actions";

const Carros = () => {
    const dispatch = useDispatch();
    const carros = useSelector((state) => state.car.cars);
    const [busca, setBusca] = useState("");

    useEffect(() => {
        dispatch(getAllCars());
    }, [dispatch]);

    const handleSearchChange = (e) => {
        setBusca(e.target.value);
    };

    const filteredCars = Array.isArray(carros) ? carros.filter((car) =>
        car.modelo.toLowerCase().includes(busca.toLowerCase())
    ) : [];

    return (
        <div className="min-h-screen bg-gray-900 text-white p-8">
            <h1 className="text-3xl font-bold mb-6">Lista de Carros</h1>
            
            <div className="mb-6">
                <input
                    type="text"
                    placeholder="Digite o nome do modelo"
                    value={busca}
                    onChange={handleSearchChange}
                    className="p-2 w-full bg-gray-700 text-white rounded-lg"
                />
            </div>

            <div className="relative overflow-x-auto shadow-md mt-10">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th className="px-6 py-3">Fabricante</th>
                            <th className="px-6 py-3">Modelo</th>
                            <th className="px-6 py-3">Ano</th>
                            <th className="px-6 py-3">Cor</th>
                            <th className="px-6 py-3">Potência</th>
                            <th className="px-6 py-3">Pais</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredCars.length > 0 ? (
                            filteredCars.map((car) => (
                                <tr key={car.id} className="bg-gray-800 border-b hover:bg-gray-700">
                                    <td className="px-6 py-4 font-medium text-gray-300">{car.fabricante}</td>
                                    <td className="px-6 py-4 font-medium text-gray-300">{car.modelo}</td>
                                    <td className="px-6 py-4 font-medium text-gray-300">{car.ano}</td>
                                    <td className="px-6 py-4 font-medium text-gray-300">{car.cor}</td>
                                    <td className="px-6 py-4 font-medium text-gray-300">{car.cavalosDePotencia}</td>
                                    <td className="px-6 py-4 font-medium text-gray-300">{car.pais}</td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="4" className="text-center py-4 text-gray-400">
                                    Nenhum carro encontrado.
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Carros;
