import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Form from "../components/form";
import ErrorRating from "../components/error";
import { useDispatch, useSelector } from "react-redux";
import { getRating } from "../store/slices/rating/actions";

function Detalhes() {
    let { id } = useParams();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getRating(id));
    }, [id]);

    // if (!rating) {
    //     return <ErrorRating />
    // }

    return (
        <Form isEdit />
    );
}

export default Detalhes;
