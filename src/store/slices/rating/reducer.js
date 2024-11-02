import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  ratings: [],
  rating: {},
  sortedRatings: [],
};

export const counterSlice = createSlice({
  name: 'rating',
  initialState,
  reducers: {
    setRatings: (state, action) => {
      state.ratings = action.payload;
    },
    setRating: (state, action) => {
      state.rating = action.payload;
    },
    resetRating: (state) => {
      state.rating = {};
    },
    setSortedRatings: (state, action) => {
      state.sortedRatings = action.payload;
    },
  },
});

export const { setRatings, setRating, resetRating, setSortedRatings } = counterSlice.actions;

export default counterSlice.reducer;
