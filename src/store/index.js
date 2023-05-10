import { configureStore } from "@reduxjs/toolkit";
import cartReducer from './cartSlice';
import loaderReducer from './loaderSlice';

export default configureStore({
  reducer: {
    cart: cartReducer,
    loader: loaderReducer,
  }
});