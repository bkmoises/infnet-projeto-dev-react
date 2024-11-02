import { Link } from "react-router-dom";

function ErrorRating() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen text-center p-6 bg-gray-900">
            <h2 className="text-2xl font-bold text-white mb-2">Avaliação não encontrada</h2>
            <p className="text-gray-300 mb-6">Não foi possível localizar a avaliação informada.</p>
            <Link 
                to="/" 
                className="px-4 py-2 bg-indigo-600 text-white font-semibold rounded hover:bg-indigo-500 transition duration-200"
            >
                Retornar para a página inicial
            </Link>
        </div>
    );
}

export default ErrorRating;