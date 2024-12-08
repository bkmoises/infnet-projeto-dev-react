import { useDispatch } from "react-redux";
import Form from "../components/form";
import { useEffect } from "react";
import { resetCar } from "../store/slices/car/reducer";

function Cadastrar() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(resetCar());
    }, [dispatch]);

    return <Form />;
}

export default Cadastrar;