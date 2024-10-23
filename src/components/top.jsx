import { FiPlus } from "react-icons/fi";
import { FaListUl } from "react-icons/fa6";

function Top({ show, act }) {
  return (
    <div className="top">
      <button onClick={() => act(!show)} className="btn">
        <span>{show ? <FiPlus /> : <FaListUl /> }</span>
        {show ? 'Cadastro' : 'Listagem'}
      </button>
    </div>
  );
}

export default Top;

