import { useDispatch } from "react-redux";
import Form from "../components/form";
import { useEffect } from "react";
import { resetCar } from "../store/slices/car/reducer";
import { AppDispatch } from "../store";

const Cadastrar: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(resetCar());
  }, [dispatch]);

  return <Form />;
};

export default Cadastrar;
