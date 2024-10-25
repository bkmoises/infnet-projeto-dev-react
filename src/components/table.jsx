import { columns } from '../config/rating-columns';
import { FaTrashCan } from "react-icons/fa6";
import { FaEdit } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

const Table = ({ datas, deleteFn, editForm }) => {
  const navigate = useNavigate();
  
  return (
    <table>
      <thead>
        <tr>
          {columns.rating.map((column, i) => (
            <th key={i}>{column}</th>
          ))}
          <th>Editar</th>
          <th>Excluir</th>
        </tr>
      </thead>
      <tbody>
        {datas.map((data, i) => (
          <tr key={i}>
            <td>{data.id}</td>
            <td>{data.user}</td>
            <td>{data.movie}</td>
            <td className='nota'>{data.note}</td>
            <td className='comentario'>{data.comment}</td>
            <td>
              <button onClick={() => navigate(`/detalhes/${data.id}`)} className='btn btn-editar'><FaEdit /></button>
            </td>
            <td>
            
              <button onClick={() => deleteFn(data.id)} className='btn btn-excluir'><FaTrashCan /></button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default Table;
