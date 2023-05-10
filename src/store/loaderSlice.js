import { createSlice } from "@reduxjs/toolkit";

export const loaderSlice = createSlice({
  name: 'loader',
  initialState: {
    isLoading: false,
  },
  reducers: {
    load: (state) => {
      state.isLoading = true;
    },
    stopLoad: (state) => {
      state.isLoading = false;
    },
  }
})

export const { load, stopLoad } = loaderSlice.actions;

export default loaderSlice.reducer;