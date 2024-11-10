// src/redux/rootReducer.js

import { combineReducers } from 'redux';
import cartReducer from './slices/cartSlice'; // Import cart slice reducer
import userReducer from './slices/userSlice'; // Import user slice reducer

const rootReducer = combineReducers({
  cart: cartReducer,
  user: userReducer,  // Add the user reducer here
});

export default rootReducer;