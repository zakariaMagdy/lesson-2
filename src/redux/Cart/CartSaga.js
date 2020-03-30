import { all, call, takeLatest, put } from "redux-saga/effects";
import userTypes from "../Users/UserTypes";
import { clearCart } from "./CartActions";

function* handleClearcart() {
  yield put(clearCart());
}

function* watchForSignOut() {
  yield takeLatest(userTypes.SIGN_OUT_SUCCESS, handleClearcart);
}

export function* cartListener() {
  yield all([call(watchForSignOut)]);
}
