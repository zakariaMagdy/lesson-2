import { createSelector } from "reselect";

const directorySelector = state => state.directory;

export const selectItems = createSelector(
  [directorySelector],
  directory => directory.items
);
export const selectSections = createSelector(
  [directorySelector],
  directory => directory.collections
);

export const selectItemsforPerview = createSelector([selectItems], items =>
  items ? Object.values(items) : []
);

export const selectCategory = categoryUrl =>
  createSelector(
    [selectItems],

    items => (items ? items[categoryUrl] : null)
  );
