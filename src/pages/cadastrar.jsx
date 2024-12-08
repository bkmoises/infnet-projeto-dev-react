import { useDispatch } from "react-redux";
import Form from "../components/form";
import { useEffect } from "react";
import { resetRating } from "../store/slices/rating/reducer";

function Cadastrar() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(resetRating());
    }, [dispatch]);

    return <Form />;
}

export default Cadastrar;