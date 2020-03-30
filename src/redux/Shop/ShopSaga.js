import { takeLatest, call, put } from "redux-saga/effects";
import { firestore, getTransformedData } from "../../fireBase/FireBaseConfig";
import { fetchingDataFail, fetchingDataSuccess } from "./ShopActions";
import { ShopTypes } from "./ShopTypes";

function* fetchItems() {
  try {
    const collectionsRef = yield firestore.collection("collections");
    const snapShot = yield collectionsRef.get();
    const collectionMap = yield call(getTransformedData, snapShot);
    yield put(fetchingDataSuccess(collectionMap));
  } catch (e) {
    yield put(fetchingDataFail(e.message));
  }
}

export function* fetchingItemsStart() {
  yield takeLatest(ShopTypes.FETCH_COLLECTIONS_START, fetchItems);
}
