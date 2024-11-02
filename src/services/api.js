import http from '../config/http';

/**
 * Função auxiliar para lidar com requisições assíncronas.
 * @param {Function} requestFunc - Função que executa a requisição.
 * @param {string} errorMessage - Mensagem de erro a ser exibida em caso de falha.
 * @returns {Promise<any>} - Retorna os dados da resposta da requisição.
 * @throws {Error} - Lança um erro com a mensagem fornecida se a requisição falhar.
 */
async function handleRequest(requestFunc, errorMessage) {
  try {
    const response = await requestFunc();
    return response?.data;
  } catch {
    throw new Error(errorMessage);
  }
}

/**
 * Obtém todos os dados de avaliações.
 * @returns {Promise<Array>} - Retorna uma promessa que resolve em um array de avaliações.
 * @throws {Error} - Lança um erro se não for possível obter os dados.
 */
export const getDataApi = () => handleRequest(() => http.get('/datas'), 'Não foi possível obter os dados');

/**
 * Exclui uma avaliação com base no ID fornecido.
 * @param {string} id - ID da avaliação que deve ser excluída.
 * @returns {Promise<Object>} - Retorna uma promessa que resolve em um objeto de confirmação.
 * @throws {Error} - Lança um erro se não for possível excluir a avaliação.
 */
export const deleteRatingApi = (id) => handleRequest(() => http.delete(`/datas/${id}`), 'Não foi possível excluir a avaliação');

/**
 * Cria uma nova avaliação com os dados fornecidos.
 * @param {Object} data - Dados da nova avaliação.
 * @param {string} data.user - Nome do usuário que criou a avaliação.
 * @param {string} data.movie - Título do filme avaliado.
 * @param {number} data.note - Nota dada ao filme.
 * @param {string} data.comment - Comentário sobre o filme.
 * @returns {Promise<Object>} - Retorna uma promessa que resolve em um objeto da avaliação criada.
 * @throws {Error} - Lança um erro se não for possível criar a avaliação.
 */
export const createRatingApi = (data) => handleRequest(() => http.post('/datas', data), 'Não foi possível criar a avaliação');

/**
 * Atualiza uma avaliação existente com os novos dados fornecidos.
 * @param {Object} data - Dados da avaliação a ser atualizada.
 * @param {string} data.id - ID da avaliação a ser atualizada.
 * @param {string} data.user - Nome do usuário que criou a avaliação.
 * @param {string} data.movie - Título do filme avaliado.
 * @param {number} data.note - Nota dada ao filme.
 * @param {string} data.comment - Comentário sobre o filme.
 * @returns {Promise<Object>} - Retorna uma promessa que resolve em um objeto da avaliação atualizada.
 * @throws {Error} - Lança um erro se não for possível atualizar a avaliação.
 */
export const updateRatingApi = (data) => handleRequest(() => http.patch(`/datas/${data.id}`, data), 'Não foi possível atualizar a avaliação');

/**
 * Obtém uma avaliação específica com base no ID fornecido.
 * @param {string} id - ID da avaliação a ser obtida.
 * @returns {Promise<Object>} - Retorna uma promessa que resolve em um objeto da avaliação.
 * @throws {Error} - Lança um erro se a avaliação não for encontrada.
 */
export const getDataByIdApi = (id) => handleRequest(() => http.get(`/datas/${id}`), 'Avaliação não encontrada');