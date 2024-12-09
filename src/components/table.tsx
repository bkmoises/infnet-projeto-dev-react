import { columns } from '../config/car-columns';
import { FaTrashCan } from "react-icons/fa6";
import { FaEdit } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { deleteCar } from "../store/slices/car/actions";
import { RootState } from '../store';

interface Car {
  id: number;
  fabricante: string;
  modelo: string;
  ano: number;
  cor: string;
  cavalosDePotencia: number;
  pais: string;
}

const Table: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { cars } = useSelector((state: RootState) => state.car);

  const handleDeleteCar = async (id: number) => {
    await dispatch(deleteCar(id));
  };

  return (
    <div className="relative overflow-x-auto shadow-md mt-10">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            {columns.car.map((column, i) => (
              <th scope="col" className="px-6 py-3" key={i}>{column}</th>
            ))}
            <th scope="col" className="px-6 py-3">Editar</th>
            <th scope="col" className="px-6 py-3">Excluir</th>
          </tr>
        </thead>
        <tbody>
          {cars.map((car: Car, i: number) => (
            <tr 
              key={i} 
              className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
            >
              <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                {car.id}
              </td>
              <td className="px-6 py-4">
                {car.fabricante}
              </td>
              <td className="px-6 py-4">
                {car.modelo}
              </td>
              <td className="px-6 py-4">
                {car.ano}
              </td>
              <td className="px-6 py-4">
                {car.cor}
              </td>
              <td className="px-6 py-4">
                {car.cavalosDePotencia}
              </td>
              <td className="px-6 py-4">
                {car.pais}
              </td>
              <td className="px-6 py-4 text-center">
                <button 
                  onClick={() => navigate(`/detalhes/${car.id}`)} 
                  className="btn btn-editar text-blue-600 hover:underline"
                >
                  <FaEdit />
                </button>
              </td>
              <td className="px-6 py-4 text-center">
                <button 
                  onClick={() => handleDeleteCar(car.id)} 
                  className="btn btn-excluir text-red-600 hover:underline"
                >
                  <FaTrashCan />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
