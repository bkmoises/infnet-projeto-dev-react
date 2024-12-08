import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllRatings } from "../store/slices/rating/actions";

const Filmes = () => {
    const dispatch = useDispatch();
    const filmes = useSelector((state) => state.rating.ratings);

    useEffect(() => {
        dispatch(getAllRatings());
    }, [dispatch]);

    const getUniqueFilmes = (filmes) => {
        const uniqueFilmesMap = {};

        filmes.forEach((filme) => {
            if (!uniqueFilmesMap[filme.movie]) {
                uniqueFilmesMap[filme.movie] = filme;
            }
        });

        return Object.values(uniqueFilmesMap);
    };

    const uniqueFilmes = getUniqueFilmes(filmes);

    return (
        <div className="min-h-screen bg-gray-900 text-white p-8">
            <h1 className="text-3xl font-bold mb-6">Lista de Filmes</h1>
            <div className="relative overflow-x-auto shadow-md mt-10">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th className="px-6 py-3">ID</th>
                            <th className="px-6 py-3">Título</th>
                        </tr>
                    </thead>
                    <tbody>
                        {uniqueFilmes.length > 0 ? (
                            uniqueFilmes.map((filme) => (
                                <tr 
                                    key={filme.id} 
                                    className="bg-gray-800 border-b hover:bg-gray-700"
                                >
                                    <td className="px-6 py-4 font-medium text-gray-300">
                                        {filme.id}
                                    </td>
                                    <td className="px-6 py-4 font-medium text-gray-300">
                                        {filme.movie}
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="2" className="text-center py-4 text-gray-400">
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

export default Filmes;
