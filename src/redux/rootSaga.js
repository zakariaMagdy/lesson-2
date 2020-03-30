import { all, call } from "redux-saga/effects";
import { fetchingItemsStart } from "./Shop/ShopSaga";
import { signInWithGoogleAndEmail } from "./Users/UserSaga";
import { cartListener } from "./Cart/CartSaga";
export default function* rootSaga() {
  yield all([
    call(fetchingItemsStart),
    call(signInWithGoogleAndEmail),
    call(cartListener)
  ]);
}
