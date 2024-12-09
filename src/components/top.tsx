import React from 'react';
import { FiPlus } from 'react-icons/fi';
import { FaListUl } from 'react-icons/fa';

interface TopProps {
  show: boolean;
  act: (show: boolean) => void;
}

const Top: React.FC<TopProps> = ({ show, act }) => {
  return (
    <div className="top">
      <button onClick={() => act(!show)} className="btn">
        <span>{show ? <FiPlus /> : <FaListUl />}</span>
        {show ? 'Cadastro' : 'Listagem'}
      </button>
    </div>
  );
};

export default Top;