import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cars: [],
  car: {},
};

export const counterSlice = createSlice({
  name: 'car',
  initialState,
  reducers: {
    setCars: (state, action) => {
      state.cars = action.payload;
    },
    setCar: (state, action) => {
      state.car = action.payload;
    },
    resetCar: (state) => {
      state.car = {};
    },
  },
});

export const { setCars, setCar, resetCar } = counterSlice.actions;

export default counterSlice.reducer;