const initialState = {
    items: [], // Cart items will be stored here
  };
  
  export const cartReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'ADD_TO_CART':
        return {
          ...state,
          items: [...state.items, action.payload], // Add new item to the cart
        };
      default:
        return state;
    }
  };