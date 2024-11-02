import { setRatings, setRating, setSortedRatings } from "./reducer";
import { getDataApi, getDataByIdApi, updateRatingApi, createRatingApi, deleteRatingApi } from '../../../services/api';
import Swal from "sweetalert2";

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

        Swal.fire({
            title: 'Avaliação salva com sucesso',
            icon: 'success',
            confirmButtonText: 'OK'
        });
        
    } catch (error) {
        Swal.fire({
            title: 'Não foi possível registrar a avaliação',
            icon: 'error',
            confirmButtonText: 'OK'
        });
    }
};

export const deleteRating = (id) => async (dispatch) => {
    try {
        Swal.fire({
            title: 'Deseja excluir essa avaliação?',
            text: "Essa ação é irreversível",
            icon: 'info',
            confirmButtonText: 'Excluir',
            cancelButtonText: 'Cancelar',
            showCancelButton: true,
            confirmButtonColor: '#d33',
            iconColor: '#d33'
        }).then(async (r) => {
            if (r.isConfirmed) {
                await deleteRatingApi(id);
                Swal.fire({
                    title: 'Avaliação excluída com sucesso',
                    icon: 'success',
                    confirmButtonText: 'OK'
                });
            }
            dispatch(getAllRatings());
        }).catch(() => {
            Swal.fire({
                title: 'Erro ao excluir avaliação',
                icon: 'error',
                confirmButtonText: 'OK'
            });
        });
    } catch (error) {
        Swal.fire({
            title: 'Erro ao excluir avaliação',
            icon: 'error',
            confirmButtonText: 'OK'
        });
    }
};

export const getSortedRatings = () => (dispatch, getState) => {
    const { ratings } = getState().rating;

    const filmesAgrupados = ratings.reduce((acc, filme) => {
        const { movie, note } = filme;

        if (!acc[movie]) {
            acc[movie] = { total: 0, count: 0 };
        }

        acc[movie].total += note;
        acc[movie].count += 1;

        return acc;
    }, {});

    const filmesComMedia = Object.keys(filmesAgrupados).map((movie) => ({
        title: movie,
        averageRating: filmesAgrupados[movie].total / filmesAgrupados[movie].count,
    }));

    const filmesOrdenados = filmesComMedia.sort((a, b) => b.averageRating - a.averageRating);

    dispatch(setSortedRatings(filmesOrdenados));
};
