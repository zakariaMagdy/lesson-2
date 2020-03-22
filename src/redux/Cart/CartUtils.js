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
    return [...items, { ...cartItem, quantity: 1 }];
  }
};

export default AddCartItem;

export const removeItem = (items, cartItem) => {
  const IsExist = items.find(curr => curr.id === cartItem.id);

  if (IsExist) {
    if (cartItem.quantity === 1) {
      return items.filter(curr => curr.id !== cartItem.id);
    } else {
      return items.map(curr => {
        if (curr.id === cartItem.id) {
          return { ...curr, quantity: curr.quantity - 1 };
        } else {
          return curr;
        }
      });
    }
  }
};
