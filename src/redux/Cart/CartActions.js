export const toggleCartDropdown = () => ({
  type: "TOGGLE_CART_DROPDOWN"
});

export const addCartItem = ({ id, name, price, imageUrl }) => {
  return {
    type: "ADD_CART_ITEM",
    payload: {
      id,
      name,
      price,
      imageUrl,
      quantity: 1
    }
  };
};
