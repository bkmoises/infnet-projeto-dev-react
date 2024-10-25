import { useState } from "react";
import Form from "../components/form";
import { createRatingApi } from "../services/api";
import { useNavigate } from "react-router-dom";

function Avaliar() {

    const navigate = useNavigate();
    const [form, setForm] = useState({});

    const setChange = (field, value) => {
      setForm({
        ...form,
        [field]: value 
      })
    }

    const rating = {};
    const createRating = async (form) => {
        try {
            await createRatingApi(form);
            alert('Avaliação registrada com sucesso');
            setForm({});
            navigate('/');
        } catch (error) {
            alert('Não foi possível cadastrar a avaliação');
        }
    }

    return (
        <Form rating={form} change={setChange} submit={createRating} />
    )
}

export default Avaliar;