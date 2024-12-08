import http from '../config/http';

async function handleRequest(requestFunc, errorMessage) {
  try {
    const response = await requestFunc();
    return response?.data;
  } catch {
    throw new Error(errorMessage);
  }
}

export const getDataApi = () => handleRequest(() => http.get('/carros'), 'Não foi possível obter os dados');

export const deleteCarApi = (id) => handleRequest(() => http.delete(`/carros/${id}`), 'Não foi possível excluir a avaliação');

export const createRatingApi = (data) => handleRequest(() => http.post('/carros', data), 'Não foi possível criar a avaliação');

export const updateRatingApi = (data) => handleRequest(() => http.patch(`/carros/${data.id}`, data), 'Não foi possível atualizar a avaliação');

export const getDataByIdApi = (id) => handleRequest(() => http.get(`/carros/${id}`), 'Avaliação não encontrada');