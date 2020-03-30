import { ShopTypes } from "./ShopTypes";

export const fetchingDataStart = () => ({
  type: ShopTypes.FETCH_COLLECTIONS_START
});

export const fetchingDataSuccess = items => ({
  type: ShopTypes.FETCH_COLLECTION_SUCCESS,
  payload: items
});

export const fetchingDataFail = msg => ({
  type: ShopTypes.FETCH_COLLECTION_FAILUR,
  payload: msg
});
