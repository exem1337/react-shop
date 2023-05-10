import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
  },
  reducers: {
    addToCart: (state, action) => {
      state.items?.push(action.payload);
    },
    removeFromCart: (state, action) => {
      state.items?.filter((el) => el.id !== action.payload);
    },
    getCartSum: (state) => {
      return state.items?.reduce((acc, el) => acc += el.price, 0)
    }
  }
})

export const { addToCart, removeFromCart, getCartSum } = cartSlice.actions;

export default cartSlice.reducer;