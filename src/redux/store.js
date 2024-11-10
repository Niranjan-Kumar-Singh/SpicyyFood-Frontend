// src/redux/store.js

import { configureStore } from '@reduxjs/toolkit'; // Import from Redux Toolkit
import rootReducer from './rootReducer'; // Import the rootReducer (adjust path if necessary)

const store = configureStore({
  reducer: rootReducer, // Pass the rootReducer (which includes all the slices)
});

export default store;
