// src/redux/slices/userSlice.js

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: null, // Default state
};

const userSlice = createSlice({
  name: 'user', // Slice name
  initialState, // Initial state
  reducers: {
    login: (state, action) => {
      state.user = action.payload; // Add user to state on login
    },
    logout: (state) => {
      state.user = null; // Remove user on logout
    },
  },
});

export const { login, logout } = userSlice.actions; // Export actions

export default userSlice.reducer; // Default export of the reducer
