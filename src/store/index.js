import { configureStore } from "@reduxjs/toolkit";
import ratingReducer from './slices/car/reducer'

export const store = configureStore({
    reducer: {
        rating: ratingReducer
    },
});