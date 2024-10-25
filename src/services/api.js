import http from '../config/http';

export async function getDataApi() {
  const rating = await http.get('/datas');
  return rating.data
}

export async function deleteRatingApi(id) {
  try {
    await http.delete(`/datas/${id}`);
  }
  catch (error) {
    throw new Error('Não foi possível excluir a avaliação');
  }
}

export async function createRatingApi(data) {
  try {
    await http.post('/datas', data);
  }
  catch (error) {
    throw new Error('Não foi possível criar a avaliação');
  }
}

export async function updateRatingApi(data) {
  try {
    await http.patch(`/datas/${data.id}`, data);
  }
  catch (error) {
    throw new Error('Não foi possível atualizar a avaliação');
  }
}

export async function getDataByIdApi(id) {
  try {
    const rating = await http.get(`/datas/${id}`);
    return rating.data;
  }
  catch (error) {
    throw new Error('Avaliação não encontrada');
  }  
}
