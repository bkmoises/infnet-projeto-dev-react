import { Link } from "react-router-dom";

function ErrorRating() {
    return (
        <div className="errorRating">
            <h2>Avaliação não encontrada</h2>
            <h2>Não foi possível localizar a avaliação informada</h2>
            <br />
            <br />
            <Link to="/">Retornar para a página inicial</Link>
        </div>
    )
}

export default ErrorRating;