// src/redux/rootReducer.js

import { combineReducers } from 'redux';
import { cartReducer } from './cartReducer';

const rootReducer = combineReducers({
  cart: cartReducer,
  // add other reducers here as needed
});

export default rootReducer;
