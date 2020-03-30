import cartType from "./CartTypes";

export const toggleCartDropdown = () => ({
  type: cartType.TOGGLE_CART_DROPDOWN
});

export const addCartItem = item => {
  return {
    type: cartType.ADD_CART_ITEM,
    payload: item
  };
};

export const removeCartItem = item => {
  return {
    type: cartType.REMOVE_CART_ITEM,
    payload: item
  };
};

export const increaseQuantity = item => {
  return {
    type: cartType.REMOVE_CART_ITEM,
    payload: item
  };
};

export const decreaseQuentity = item => {
  return {
    type: cartType.DECREASE_CART_ITEM,
    payload: item
  };
};

export const clearCart = () => ({
  type: cartType.CLEAR_CART
});
