import { configureStore } from "@reduxjs/toolkit";
import ratingReducer from './slices/rating/reducer'

export const store = configureStore({
    reducer: {
        rating: ratingReducer
    },
});