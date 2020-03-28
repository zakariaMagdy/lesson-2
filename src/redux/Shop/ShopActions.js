import { ShopTypes } from "./ShopTypes";

import { firestore, getTransformedData } from "../../fireBase/FireBaseConfig";

const fitchedDataSuccess = items => ({
  type: ShopTypes.FETCH_COLLECTION_SUCCESS,
  payload: items
});

const failurFetching = msg => ({
  type: ShopTypes.FETCH_COLLECTION_FAILUR,
  payload: msg
});

export const fetchingData = () => {
  return dispatch => {
    const collectionsRef = firestore.collection("collections");
    collectionsRef.onSnapshot(async snapshot => {
      try {
        const CollectionMap = getTransformedData(snapshot);
        dispatch(fitchedDataSuccess(CollectionMap));
      } catch (error) {
        dispatch(failurFetching(error));
      }

      //add data to redux by action
    });
  };
};
