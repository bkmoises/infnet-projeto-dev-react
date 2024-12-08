import { useEffect } from "react";
import { useParams } from "react-router-dom";
import Form from "../components/form";
import ErrorMsg from "../components/error";
import { useDispatch, useSelector } from "react-redux";
import { getAllCar } from "../store/slices/car/actions";

function Detalhes() {
    const { id } = useParams();
    const dispatch = useDispatch();
    const car = useSelector((state) => state.car.car);

    useEffect(() => {
        dispatch(getAllCar(id));
    }, [dispatch, id]);

    if (!car || Object.keys(car).length === 0) {
        return <ErrorMsg />;
    }

    return <Form isEdit car={car} />;
}

export default Detalhes;