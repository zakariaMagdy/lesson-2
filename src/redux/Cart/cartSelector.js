import { createSelector } from "reselect";

const selectCart = state => state.cart;

export const selectCartItems = createSelector(
  [selectCart],
  cart => cart.cartItems
);

export const selectCartToggle = createSelector(selectCart, cart => cart.show);

export const selectCartItemscount = createSelector(
  [selectCartItems],
  cartItems => cartItems.reduce((prev, curr) => prev + curr.quantity, 0)
);

export const selectCartItemsTotal = createSelector(
  [selectCartItems],
  cartItems =>
    cartItems.reduce((prev, curr) => prev + curr.quantity * curr.price, 0)
);
