import { columns } from '../config/rating-columns';
import { FaTrashCan } from "react-icons/fa6";
import { FaEdit } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { deleteRating } from "../store/slices/rating/actions";

const Table = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { ratings } = useSelector((state) => state.rating); 

  const handleDeleteRating = async (id) => await dispatch(deleteRating(id));

  return (
    <div className="relative overflow-x-auto shadow-md mt-10">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            {columns.rating.map((column, i) => (
              <th scope="col" className="px-6 py-3" key={i}>{column}</th>
            ))}
            <th scope="col" className="px-6 py-3">Editar</th>
            <th scope="col" className="px-6 py-3">Excluir</th>
          </tr>
        </thead>
        <tbody>
          {ratings.map((rating, i) => (
            <tr 
              key={i} 
              className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
            >
              <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                {rating.id}
              </td>
              <td className="px-6 py-4">
                {rating.user}
              </td>
              <td className="px-6 py-4">
                {rating.movie}
              </td>
              <td className="px-6 py-4">
                {rating.note}
              </td>
              <td className="px-6 py-4">
                {rating.comment}
              </td>
              <td className="px-6 py-4 text-center">
                <button 
                  onClick={() => navigate(`/detalhes/${rating.id}`)} 
                  className="btn btn-editar text-blue-600 hover:underline"
                >
                  <FaEdit />
                </button>
              </td>
              <td className="px-6 py-4 text-center">
                <button 
                  onClick={() => handleDeleteRating(rating.id)} 
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
