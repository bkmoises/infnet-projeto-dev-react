import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Form from "../components/form";
import { getDataByIdApi, updateRatingApi } from "../services/api";
import ErrorRating from "../components/error";

function Detalhes() {
    let { id } = useParams();
    const navigate = useNavigate();
    const [rating, setRating] = useState(null);

    useEffect(() => {
        (async () => {
            const rating = await getDataByIdApi(id);
            setRating(rating);
        })()
    }, [id]);

    const setChange = (field, value) => {
        setRating({
            ...rating,
            [field]: value
        })
    }

    const updateRating = async () => {
        try {
            await updateRatingApi(rating);
            alert('Avaliação atualizada com sucesso');
            setRating({});
            navigate('/');
        } catch (error) {
            alert('Não foi possível atualizar a avaliação');
        }
    }

    if (!rating) {
        return <ErrorRating />
    }

    return (
        <Form rating={rating || {}} change={setChange} submit={updateRating} />
    )
}

export default Detalhes;