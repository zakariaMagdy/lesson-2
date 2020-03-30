import { createSelector } from "reselect";

const shopSelector = state => state.shop;

export const selectItems = createSelector([shopSelector], shop => shop.items);

export const selectItemsforPerview = createSelector([selectItems], items =>
  items ? Object.values(items) : []
);

export const selectCategory = categoryUrl =>
  createSelector(
    [selectItems],

    items => (items ? items[categoryUrl] : null)
  );

export const selectItemsFetshingState = createSelector(
  [selectItems],
  items => !!items
);
