import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { editForm, saveForm } from '../store/slices/car/actions';

interface CarState {
  fabricante: string;
  modelo: string;
  ano: string;
  cor: string;
  cavalosDePotencia: string;
  pais: string;
}

interface FormProps {
  isEdit: boolean;
}

const Form: React.FC<FormProps> = ({ isEdit }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const car = useSelector((state: { car: { car: CarState } }) => state.car.car);

  const changeField = (field: keyof CarState, value: string) => {
    dispatch(editForm(field, value));
  };

  const submitForm = () => {
    dispatch(saveForm(isEdit)).then(() => navigate('/'));
  };

  return (
    <div className="cadastro max-w-sm mx-auto">
      <div className="field mb-5">
        <label htmlFor="fabricante" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white mt-20">Fabricante:</label>
        <input
          value={car.fabricante ?? ''}
          onChange={(e) => changeField('fabricante', e.target.value)}
          type="text"
          id="fabricante"
          placeholder="Digite o fabricante"
          className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          required
        />
      </div>

      <div className="field mb-5">
        <label htmlFor="modelo" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Modelo:</label>
        <input
          value={car.modelo ?? ''}
          onChange={(e) => changeField('modelo', e.target.value)}
          type="text"
          id="modelo"
          placeholder="Digite o modelo"
          className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          required
        />
      </div>

      <div className="field mb-5">
        <label htmlFor="ano" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Ano:</label>
        <input
          value={car.ano ?? ''}
          onChange={(e) => changeField('ano', e.target.value)}
          type="text"
          id="ano"
          placeholder="Digite o ano"
          className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          required
        />
      </div>

      <div className="field mb-5">
        <label htmlFor="cor" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Cor:</label>
        <input
          value={car.cor ?? ''}
          onChange={(e) => changeField('cor', e.target.value)}
          type="text"
          id="cor"
          placeholder="Digite a cor"
          className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          required
        />
      </div>

      <div className="field mb-5">
        <label htmlFor="cavalosDePotencia" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Potência:</label>
        <input
          value={car.cavalosDePotencia ?? ''}
          onChange={(e) => changeField('cavalosDePotencia', e.target.value)}
          type="text"
          id="cavalosDePotencia"
          placeholder="Digite a potência"
          className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          required
        />
      </div>

      <div className="field mb-5">
        <label htmlFor="pais" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">País:</label>
        <input
          value={car.pais ?? ''}
          onChange={(e) => changeField('pais', e.target.value)}
          type="text"
          id="pais"
          placeholder="Digite o país"
          className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          required
        />
      </div>

      <div className="publicar">
        <button
          onClick={submitForm}
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Cadastrar
        </button>
      </div>
    </div>
  );
};

export default Form;