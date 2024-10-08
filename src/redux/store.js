// src/redux/store.js

import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cartSlice';
// Import other reducers as needed

const store = configureStore({
  reducer: {
    cart: cartReducer,
    // Add other reducers here
  },
});

export default store;
