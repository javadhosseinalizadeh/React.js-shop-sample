import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
import counterReducer from './cart-slice'
export default configureStore({
  reducer: {
    cart: cartReducer,
    counter: counterReducer
  },
});
