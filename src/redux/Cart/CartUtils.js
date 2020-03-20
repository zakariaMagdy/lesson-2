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

export default AddCartItem;
