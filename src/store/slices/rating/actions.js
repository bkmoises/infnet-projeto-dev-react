import { setRatings, setRating } from "./reducer";
import { getDataApi, getDataByIdApi, updateRatingApi, createRatingApi, deleteRatingApi } from '../../../services/api';

export const getAllRatings = () => async (dispatch) => {
    try {
        const res = await getDataApi();
        dispatch(setRatings(res));
    } catch (error) {
        console.log(`erro: ${error}`);
    }
};

export const getRating = (id) => async (dispatch) => {
    try {
        const res = await getDataByIdApi(id);
        dispatch(setRating(res));
    } catch (error) {
        console.log(`erro: ${error}`);
    }
};

export const editForm = (field, value) => async (dispatch, getState) => {
    const { rating } = getState().rating;
    dispatch(setRating({
        ...rating,
        [field]: value
    }));
};

export const saveForm = (editForm=false) => async (dispatch, getState) => {
    try {
        const { rating } = getState().rating;

        const action = editForm ? updateRatingApi : createRatingApi;
        await action(rating);
        dispatch(getAllRatings());
    } catch (error) {
        alert('Não foi possível atualizar a avaliação');
    }
};

export const deleteRating = (id) => async (dispatch) => {
    try {
        await deleteRatingApi(id);
        dispatch(getAllRatings());
    } catch (error) {
        alert("Erro ao excluir avaliação");
    }
};
