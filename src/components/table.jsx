const Table = ({ columns, datas }) => {
  return (
    <table>
      <thead>
        <tr>
          {columns.map((column, i) => (
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
              <a href='#' className='btn-editar'>Editar</a>
            </td>
            <td>
              <a href='#' className='btn-excluir'>Excluir</a>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default Table;
