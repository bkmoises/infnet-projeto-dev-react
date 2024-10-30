import { columns } from '../config/rating-columns';
import { FaTrashCan } from "react-icons/fa6";
import { FaEdit } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

const Table = ({ datas, deleteFn, editForm }) => {
  const navigate = useNavigate();

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
          {datas.map((data, i) => (
            <tr 
              key={i} 
              className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
            >
              <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                {data.id}
              </td>
              <td className="px-6 py-4">
                {data.user}
              </td>
              <td className="px-6 py-4">
                {data.movie}
              </td>
              <td className="px-6 py-4">
                {data.note}
              </td>
              <td className="px-6 py-4">
                {data.comment}
              </td>
              <td className="px-6 py-4 text-center">
                <button 
                  onClick={() => navigate(`/detalhes/${data.id}`)} 
                  className="btn btn-editar text-blue-600 hover:underline"
                >
                  <FaEdit />
                </button>
              </td>
              <td className="px-6 py-4 text-center">
                <button 
                  onClick={() => deleteFn(data.id)} 
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
