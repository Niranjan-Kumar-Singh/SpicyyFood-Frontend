import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const addToCart = createAsyncThunk(
  'cart/addToCart',
  async ({ itemId, quantity }, { dispatch, rejectWithValue }) => {
    try {
      const response = await axios.post(
        'http://localhost:5000/api/cart',
        { itemId, quantity },
        { headers: { Authorization: `Bearer ${localStorage.getItem("token")}` } }
      );
      dispatch(fetchCart()); // Fetch updated cart after adding an item
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || 'Error adding item');
    }
  }
);

export const fetchCart = createAsyncThunk(
  'cart/fetchCart',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get('http://localhost:5000/api/cart', {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      });
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || 'Error fetching cart');
    }
  }
);

const cartSlice = createSlice({
  name: 'cart',
  initialState: { items: [], status: 'idle', error: null },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(addToCart.fulfilled, (state, action) => {
        state.items = action.payload.items || [];
      })
      .addCase(fetchCart.fulfilled, (state, action) => {
        state.items = action.payload.items || [];
      })
      .addCase(addToCart.rejected, (state, action) => {
        state.error = action.payload;
      });
  },
});

export default cartSlice.reducer;
