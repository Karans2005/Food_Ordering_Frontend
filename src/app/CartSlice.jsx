// features/cart/cartSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [], // 👈 important: structure matches with state.cart.cart
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.cart.push(action.payload);
    },
    removeFromCart: (state, action) => {
      state.cart = state.cart.filter(x => x.id !== action.payload.id)
    }
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
