import { useDispatch, useSelector } from "react-redux";
import { editForm, saveForm } from "../store/slices/rating/actions";
import { useNavigate } from "react-router-dom";

function Form({ isEdit }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const rating = useSelector((state) => state.rating.rating);

  const changeField = (field, value) => dispatch(editForm(field, value));

  const submitForm = () => {
    try {
      dispatch(saveForm(isEdit));
      alert('Avaliação atualizada com sucesso');
      navigate('/');
    } catch(error) {
      alert('Não foi possivel completar essa solicitação')
    }
  }

  return (
    <div className="cadastro max-w-sm mx-auto">
      <div className="field mb-5">
        <label htmlFor="user" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white mt-20">Nome:</label>
        <input
          value={rating.user ?? ''}
          onChange={(e) => changeField('user', e.target.value)}
          type="text"
          id="user"
          placeholder="Digite seu nome"
          className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          required
        />
      </div>

      <div className="field mb-5">
        <label htmlFor="movie" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Filme:</label>
        <input
          value={rating.movie ?? ''}
          onChange={(e) => changeField('movie', e.target.value)}
          type="text"
          id="movie"
          placeholder="Digite o nome do filme"
          className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          required
        />
      </div>

      <div className="field mb-5">
        <label htmlFor="note" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nota:</label>
        <input
          value={rating.note ?? ''}
          onChange={(e) => changeField('note', e.target.value)}
          type="text"
          id="note"
          placeholder="Digite sua nota"
          className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          required
        />
      </div>

      <div className="field mb-5">
        <label htmlFor="comment" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Comentário:</label>
        <textarea
          value={rating.comment ?? ''}
          onChange={(e) => changeField('comment', e.target.value)}
          id="comment"
          rows="4"
          placeholder="Insira seu comentário"
          className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          required
        ></textarea>
      </div>

      <div className="publicar">
        <button
          onClick={submitForm}
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Publicar
        </button>
      </div>
    </div>
  );
}

export default Form;
