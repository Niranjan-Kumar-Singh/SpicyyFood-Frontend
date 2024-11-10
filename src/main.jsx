import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css'; // Bootstrap CSS
import './styles/Header.css'; // Custom CSS

// Redux setup with Redux Toolkit
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './redux/slices/cartSlice'; // Import the cart slice

// Set up the Redux store
const store = configureStore({
  reducer: {
    cart: cartReducer, // Add the cart slice to the store
  },
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
