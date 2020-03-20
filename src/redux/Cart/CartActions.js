import cartType from "./CartTypes";

export const toggleCartDropdown = () => ({
  type: cartType.TOGGLE_CART_DROPDOWN
});

export const addCartItem = ({ id, name, price, imageUrl }) => {
  return {
    type: cartType.ADD_CART_ITEM,
    payload: {
      id,
      name,
      price,
      imageUrl,
      quantity: 1
    }
  };
};


