import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cars: [],
  car: {},
  sortedCars: [],
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
    setSortedCars: (state, action) => {
      state.sortedCars = action.payload;
    },
  },
});

export const { setCars, setCar, resetCar, setSortedCars } = counterSlice.actions;

export default counterSlice.reducer;