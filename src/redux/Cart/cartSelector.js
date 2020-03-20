import { createSelector } from "reselect";

const selectCart = state => state.cart;

const selectCartItems = createSelector([selectCart], cart => cart.cartItems);

export const selectCartItemscount = createSelector(
  [selectCartItems],
  cartItems => cartItems.reduce((prev, curr) => prev + curr.quantity, 0)
);
