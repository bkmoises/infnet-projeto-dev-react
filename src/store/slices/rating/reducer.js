import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  ratings: [],
  rating: {},
}

export const counterSlice = createSlice({
  name: 'rating',
  initialState,
  reducers: {
    setRatings: (state, action) => {
      state.ratings = action.payload
    },
    setRating: (state, action) => {
      state.rating = action.payload
    },

    // incrementByAmount: (state, action) => {
    //   state.value += action.payload
    // },
  },
})

export const { setRatings, setRating } = counterSlice.actions

export default counterSlice.reducer