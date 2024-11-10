// src/redux/rootReducer.js

import { combineReducers } from 'redux';
import userReducer from './userReducer'; // Import the userReducer

const rootReducer = combineReducers({
  user: userReducer, // Combine the userReducer with others (if any)
});

export default rootReducer;
