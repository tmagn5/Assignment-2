import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./cartSlice";

export const store = configureStore({
  reducer: {
    cart: counterSlice
  },
});