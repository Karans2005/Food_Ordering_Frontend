// app/store.js
import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './CartSlice'; // ✅ correct path

const store = configureStore({
  reducer: {
    cart: cartReducer, // 👈 this will become state.cart
  },
});

export default store;
