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

function rootReducer(state = initialState, action) {
  switch (action.type) {
    // Define your actions here
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
