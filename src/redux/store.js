// src/redux/store.js

import { configureStore } from '@reduxjs/toolkit';
import userReducer from './slices/userSlice'; // Import the new user slice
import cartReducer from './slices/cartSlice'; // Import the cart slice

const store = configureStore({
  reducer: {
    user: userReducer, // Add the user slice reducer to the store
  },
});

export default store;
