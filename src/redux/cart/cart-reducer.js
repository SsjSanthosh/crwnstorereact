import { addItemToCart, removeItemFromCart } from "./cart-utils";

const INITIAL_STATE = {
  hidden: true,
  cartItems: []
};

const cartReducer = (state = INITIAL_STATE, action) => {
  const newState = [...state.cartItems, action.payload];

  switch (action.type) {
    case "TOGGLE_CART":
      return {
        ...state,
        hidden: !state.hidden
      };
    case "ADD_ITEM":
      return {
        ...state,
        cartItems: addItemToCart(state.cartItems, action.payload)
      };
    case "CLEAR_ITEM":
      return {
        ...state,
        cartItems: state.cartItems.filter(item => item.id != action.payload.id)
      };
    case "REMOVE_ITEM":
      return {
        ...state,
        cartItems: removeItemFromCart(state.cartItems, action.payload)
      };
    default:
      return state;
  }
};

export default cartReducer;
