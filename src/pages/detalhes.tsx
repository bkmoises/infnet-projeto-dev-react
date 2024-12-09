import { useEffect } from "react";
import { useParams } from "react-router-dom";
import Form from "../components/form";
import ErrorMsg from "../components/error";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store";  // Adicionando o tipo para a store
import { getAllCar } from "../store/slices/car/actions";
import { Car } from "../types/car";  // Tipo para o carro

interface Params {
    id: string;
}

const Detalhes: React.FC = () => {
    const { id } = useParams<Params>();  // Especificando o tipo dos parâmetros
    const dispatch = useDispatch();
    const car = useSelector((state: RootState) => state.car.car);

    useEffect(() => {
        if (id) {
            dispatch(getAllCar(id));
        }
    }, [dispatch, id]);

    if (!car || Object.keys(car).length === 0) {
        return <ErrorMsg />;
    }

    return <Form isEdit car={car} />;
};

export default Detalhes;
