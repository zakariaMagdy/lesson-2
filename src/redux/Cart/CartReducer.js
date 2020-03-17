const cartState = {
  show: false
};

export const CartReducer = (state = cartState, action) => {
  switch (action.type) {
    case "TOGGLE_CART_DROPDOWN":
      return { ...state, show: !state.show };

    default:
      return state;
  }
};
