import http from '../services/http';

export async function getDataApi() {
  const rating = await http.get('/datas');
  return rating.data
}

export async function deleteRatingApi(id) {
  try {
    await http.delete(`/datas/${id}`);
  }
  catch (error) {
    throw new Error(error);
  }
}
