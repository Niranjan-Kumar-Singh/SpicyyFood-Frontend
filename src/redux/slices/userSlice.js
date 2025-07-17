import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Initial state for user slice
const initialState = {
  user: null,
  loading: false,
  error: null,
};

// Thunks for asynchronous actions (fetch and update user)
export const fetchUserData = createAsyncThunk(
  'user/fetchUserData',
  async (_, { rejectWithValue }) => {
    try {
      const token = localStorage.getItem('token');
      if (!token) {
        throw new Error('Authorization token is missing. Please log in again.');
      }

      const response = await axios.get(`${import.meta.env.VITE_API_BASE_URL}/api/users/me`, {
        headers: { Authorization: `Bearer ${token}` },
      });

      return response.data; // Return user data
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || 'Error fetching user data');
    }
  }
);

export const updateUserData = createAsyncThunk(
  'user/updateUserData',
  async (userData, { rejectWithValue }) => {
    try {
      const token = localStorage.getItem('token');
      if (!token) {
        throw new Error('Authorization token is missing. Please log in again.');
      }

      const response = await axios.put(`${import.meta.env.VITE_API_BASE_URL}/api/users/me`, userData, {
        headers: { Authorization: `Bearer ${token}` },
      });

      return response.data; // Return updated user data
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || 'Failed to update user.');
    }
  }
);

// Create slice with actions and reducers
const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Fetch user data actions
      .addCase(fetchUserData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchUserData.fulfilled, (state, action) => {
        state.user = action.payload;
        state.loading = false;
      })
      .addCase(fetchUserData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      // Update user data actions
      .addCase(updateUserData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateUserData.fulfilled, (state, action) => {
        state.user = action.payload;
        state.loading = false;
      })
      .addCase(updateUserData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

// Export actions (though we don’t need them here as they are handled by thunks)
export default userSlice.reducer;
