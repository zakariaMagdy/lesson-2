import AddCartItem from "./CartUtils";
import { removeItem } from "./CartUtils";
import cartType from "./CartTypes";

const cartState = {
  show: false,
  cartItems: []
};

export const CartReducer = (state = cartState, action) => {
  switch (action.type) {
    case cartType.TOGGLE_CART_DROPDOWN:
      return { ...state, show: !state.show };

    case cartType.ADD_CART_ITEM:
      return {
        ...state,
        cartItems: AddCartItem(state.cartItems, action.payload)
      };

    case cartType.REMOVE_CART_ITEM:
      return {
        ...state,
        cartItems: state.cartItems.filter(curr => curr.id !== action.payload.id)
      };

    case cartType.DECREASE_CART_ITEM:
      return {
        ...state,
        cartItems: removeItem(state.cartItems, action.payload)
      };

    case cartType.CLEAR_CART:
      return {
        ...state,
        cartItems: []
      };

    default:
      return state;
  }
};
