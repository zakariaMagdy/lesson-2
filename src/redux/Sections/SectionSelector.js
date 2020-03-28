import { createSelector } from "reselect";

const selectItemSections = state => state.itemSections;
export const selectSections = createSelector(
  [selectItemSections],
  itemSections => itemSections.sections
);
