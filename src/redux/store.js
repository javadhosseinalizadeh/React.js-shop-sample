import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
import counterReducer from './add-slice'
export default configureStore({
  reducer: {
    cart: cartReducer,
    counter: counterReducer
  },
});
