import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/Header.css';

import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './redux/slices/cartSlice';
import { CartProvider } from './context/CartContext'; // ✅ import your context

const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <CartProvider> {/* ✅ wrap here */}
      <App />
    </CartProvider>
  </Provider>
);
