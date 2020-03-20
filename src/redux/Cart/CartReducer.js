import AddCartItem from "./CartUtils";
import cartType from "./CartTypes";

const cartState = {
  show: false,
  cartItems: [],
  y: false
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

    default:
      return state;
  }
};
