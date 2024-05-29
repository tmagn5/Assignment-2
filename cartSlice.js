import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "cart",
  initialState: {
    value: [],
    total_count: 0
  },
  reducers: {
    add_to_cart: (state, action) => {
      state.total_count += 1;
      state.value.push(action.payload)
    },
    decremented: (state) => {
      state.value -= 1;
    },
  },
});

export const cartSelector = state => state.cart.value
export const countSelector = state => state.cart.total_count

export const { add_to_cart, decremented } = counterSlice.actions;
export default counterSlice.reducer;