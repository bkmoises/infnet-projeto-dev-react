import { setCars, setCar, setSortedCars } from "./reducer";
import { getDataApi, getDataByIdApi, updateCarApi, createCarApi, deleteCarApi } from '../../../services/api';
import Swal from "sweetalert2";

export const getAllCars = () => async (dispatch) => {
    try {
        const res = await getDataApi();
        dispatch(setCars(res));
    } catch (error) {
        console.log(`erro: ${error}`);
    }
};

export const getAllCar = (id) => async (dispatch) => {
    try {
        const res = await getDataByIdApi(id);
        dispatch(setCar(res));
    } catch (error) {
        console.log(`erro: ${error}`);
    }
};

export const editForm = (field, value) => async (dispatch, getState) => {
    const { car } = getState().car;
    dispatch(setCar({
        ...car,
        [field]: value
    }));
};

export const saveForm = (editForm=false) => async (dispatch, getState) => {
    try {
        const { car } = getState().car;

        const action = editForm ? updateCarApi : createCarApi;
        await action(car);
        dispatch(getAllCars());

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

export const deleteCar = (id) => async (dispatch) => {
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
                await deleteCarApi(id);
                Swal.fire({
                    title: 'Avaliação excluída com sucesso',
                    icon: 'success',
                    confirmButtonText: 'OK'
                });
            }
            dispatch(getAllCars());
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

export const getSortedCars = () => (dispatch, getState) => {
    const { cars } = getState().car;

    const filmesAgrupados = cars.reduce((acc, filme) => {
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
        averageCar: filmesAgrupados[movie].total / filmesAgrupados[movie].count,
    }));

    const filmesOrdenados = filmesComMedia.sort((a, b) => b.averageCar - a.averageCar);

    dispatch(setSortedCars(filmesOrdenados));
};
