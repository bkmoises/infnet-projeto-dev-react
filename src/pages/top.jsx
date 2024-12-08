import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllCars, getSortedCars } from "../store/slices/car/actions";

const FilmesClassificados = () => {
    const dispatch = useDispatch();
    const filmesOrdenados = useSelector((state) => state.rating.sortedRatings);

    useEffect(() => {
        dispatch(getAllCars());
    }, [dispatch]);

    useEffect(() => {
        dispatch(getSortedCars());
    }, [dispatch]);

    return (
        <div className="min-h-screen bg-gray-900 text-white p-8">
            <h1 className="text-3xl font-bold mb-6">Top Filmes</h1>
            <div className="relative overflow-x-auto shadow-md mt-10">
                <table className="w-full text-sm text-left text-gray-500 bg-gray-800">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th className="px-6 py-3">Posição</th>
                            <th className="px-6 py-3">Título</th>
                            <th className="px-6 py-3">Média da Avaliação</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filmesOrdenados.length > 0 ? (
                            filmesOrdenados.map((filme, index) => (
                                <tr 
                                    key={filme.title} 
                                    className="bg-gray-800 border-b hover:bg-gray-700"
                                >
                                    <td className="px-6 py-4 font-medium text-gray-300">
                                        {index + 1}
                                    </td>
                                    <td className="px-6 py-4 font-medium text-gray-300">
                                        {filme.title}
                                    </td>
                                    <td className="px-6 py-4 font-medium text-gray-300">
                                        {filme.averageRating.toFixed(2)}
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="3" className="text-center py-4 text-gray-400">
                                    Nenhum filme encontrado.
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default FilmesClassificados;
