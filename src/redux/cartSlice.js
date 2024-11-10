// src/redux/cartSlice.js

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [], // Each item: { id, name, price, quantity, image }
};

// Define cart slice
const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    // Add item to cart
    addToCart(state, action) {
      const item = action.payload;
      const existingItem = state.items.find((i) => i.id === item.id);

      if (existingItem) {
        // If the item already exists in the cart, increase its quantity
        existingItem.quantity += 1;
      } else {
        // If the item doesn't exist, add a new item to the cart with initial quantity 1
        state.items.push({
          ...item, 
          quantity: 1,
        });
      }
    },
    
    // Remove item from cart
    removeFromCart(state, action) {
      const id = action.payload;
      state.items = state.items.filter((item) => item.id !== id);
    },
    
    // Update quantity of a specific item in the cart
    updateQuantity(state, action) {
      const { id, quantity } = action.payload;
      const item = state.items.find((i) => i.id === id);

      if (item && quantity > 0) {
        item.quantity = quantity; // Only update if quantity is greater than 0
      }
    },
    
    // Clear the entire cart
    clearCart(state) {
      state.items = [];
    },
    
    // Set the cart with initial items (for restoring cart state)
    setCart(state, action) {
      state.items = action.payload; // Accept initial cart state
    },
  },
});

// Export actions from cart slice
export const { addToCart, removeFromCart, updateQuantity, clearCart, setCart } = cartSlice.actions;

// Export reducer for store
export default cartSlice.reducer;
