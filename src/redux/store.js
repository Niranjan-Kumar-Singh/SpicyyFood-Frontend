// src/redux/store.js

import { createStore, combineReducers } from 'redux';
import { cartReducer } from './reducers/cartReducer';

const rootReducer = combineReducers({
  cart: cartReducer, // Include the cart reducer
});

export const store = createStore(rootReducer);