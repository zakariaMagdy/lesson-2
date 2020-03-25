import { DirectoryTypes } from "./DirectoryTypes";

export const AddCollections = collections => {
  return {
    type: DirectoryTypes.ADD_COLLECTIONS_ITEMS,
    payload: collections
  };
};
