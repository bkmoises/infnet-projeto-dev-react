import { configureStore } from "@reduxjs/toolkit";
import carReducer from './slices/car/reducer'

export const store = configureStore({
    reducer: {
        car: carReducer
    },
});