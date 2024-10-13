// src/main.jsx

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import './styles/Header.css'; // Import custom Header styles

// Redux Setup
import { Provider } from 'react-redux';
import { createStore } from 'redux';

// Sample Reducer (Replace with your actual reducers)
const initialState = {
  cart: {
    items: [
      { id: 1, name: 'Pizza', quantity: 2 },
      { id: 2, name: 'Burger', quantity: 1 }
    ]
  }
};

// Action Types
const ADD_ITEM = 'ADD_ITEM';

// Reducer Function
function rootReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_ITEM:
      return {
        ...state,
        cart: {
          ...state.cart,
          items: [...state.cart.items, action.payload]
        }
      };
    default:
      return state;
  }
}

const store = createStore(rootReducer);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
