export const toggleCartDropdown = () => ({
  type: "TOGGLE_CART_DROPDOWN"
});

export const addCartItem = ({ name, price, imageUrl }) => {
  return {
    type: "ADD_CART_ITEM",
    payload: {
      name,
      price,
      imageUrl,
      quantity: 1
    }
  };
};
