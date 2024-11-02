import { useEffect } from "react";
import { useParams } from "react-router-dom";
import Form from "../components/form";
import ErrorRating from "../components/error";
import { useDispatch, useSelector } from "react-redux";
import { getRating } from "../store/slices/rating/actions";

function Detalhes() {
    const { id } = useParams();
    const dispatch = useDispatch();
    const rating = useSelector((state) => state.rating.rating);

    useEffect(() => {
        dispatch(getRating(id));
    }, [dispatch, id]);

    if (!rating || Object.keys(rating).length === 0) {
        return <ErrorRating />;
    }

    return <Form isEdit rating={rating} />;
}

export default Detalhes;