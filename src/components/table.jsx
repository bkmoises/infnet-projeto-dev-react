import { columns } from '../config/rating-columns';

const Table = ({ datas, deleteFn }) => {

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
              <button href='#' className='btn btn-editar'>Editar</button>
            </td>
            <td>
              <button onClick={() => deleteFn(data.id)} className='btn btn-excluir'>Excluir</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default Table;
