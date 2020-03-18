import { addCartItem } from "./CartActions";

const cartState = {
  show: false,
  cartItems: []
};

const AddCartItem = (items, cartItem) => {
  const IsExist = items.find(curr => curr.id === cartItem.id);

  if (IsExist) {
    return items.map(curr => {
      if (curr.id === cartItem.id) {
        return { ...curr, quantity: curr.quantity + 1 };
      } else {
        return curr;
      }
    });
  } else {
    return [...items, cartItem];
  }
};

export const CartReducer = (state = cartState, action) => {
  switch (action.type) {
    case "TOGGLE_CART_DROPDOWN":
      return { ...state, show: !state.show };

    case "ADD_CART_ITEM":
      return {
        ...state,
        cartItems: AddCartItem(state.cartItems, action.payload)
      };

    default:
      return state;
  }
};
