// src/redux/cartReducer.js

const initialState = {
  items: [
    { id: 1, name: 'Pizza', quantity: 2 },
    { id: 2, name: 'Burger', quantity: 1 }
  ]
};

// Action Types
const ADD_ITEM = 'ADD_ITEM';

// Reducer Function
export function cartReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_ITEM:
      return {
        ...state,
        items: [...state.items, action.payload]
      };
    default:
      return state;
  }
}
