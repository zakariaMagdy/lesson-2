import { takeLatest, call, put, all, delay } from "redux-saga/effects";
import userTypes from "./UserTypes";
import {
  signInSuccess,
  signInFail,
  removeError,
  signOutFail,
  signOutSuccess,
  signUpFail
} from "./UserAction";
import {
  googleProvider,
  auth,
  createUserProfileDocument,
  checkSignIn
} from "../../fireBase/FireBaseConfig";

function* hideError() {
  yield delay(3500);
  yield put(removeError());
}
function* showError(e) {
  yield put(signInFail(e.message));
  yield hideError();
}

function* SignIn(user) {
  try {
    const userRef = yield createUserProfileDocument(user);
    const userSnap = yield userRef.get();
    yield put(signInSuccess({ id: userSnap.id, ...userSnap.data() }));
  } catch (e) {
    yield showError(e);
  }
}
///////////////////////workers
function* signWithGoogle() {
  try {
    const { user } = yield auth.signInWithPopup(googleProvider);
    yield SignIn(user);
  } catch (e) {
    yield showError(e);
  }
}

function* signInEmail({ email, pass }) {
  try {
    const { user } = yield auth.signInWithEmailAndPassword(email, pass);
    yield SignIn(user);
  } catch (e) {
    yield showError(e);
  }
}

function* signOut() {
  try {
    yield auth.signOut();
    yield put(signOutSuccess());
  } catch (e) {
    yield put(signOutFail(e.message));
    yield hideError();
  }
}

function* checkState() {
  try {
    const user = yield checkSignIn();
    yield user && SignIn(user);
  } catch (e) {
    yield showError(e);
  }
}

function* handleSignUp({ payload: { email, password, displayName } }) {
  try {
    const { user } = yield auth.createUserWithEmailAndPassword(email, password);
    const userRef = yield createUserProfileDocument(user, { displayName });
    const userSnap = yield userRef.get();
    yield put(signInSuccess({ id: userSnap.id, ...userSnap.data() }));
  } catch (e) {
    yield put(signUpFail(e.message));
    yield hideError();
  }
}
//////////////////////////////// watchers

function* signInWithEmail() {
  yield takeLatest(userTypes.EMAIL_SIGN_IN_START, signInEmail);
}

function* signInWithGoogle() {
  yield takeLatest(userTypes.GOOGLE_SIGN_IN_START, signWithGoogle);
}

function* watchSignOut() {
  yield takeLatest(userTypes.SIGN_OUT_START, signOut);
}

function* checkUserState() {
  yield takeLatest(userTypes.CHECK_USER_STATE, checkState);
}
function* watchSignUp() {
  yield takeLatest(userTypes.SIGN_UP_START, handleSignUp);
}

//all listeners
export function* signInWithGoogleAndEmail() {
  yield all([
    call(signInWithGoogle),
    call(signInWithEmail),
    call(watchSignOut),
    call(checkUserState),
    call(watchSignUp)
  ]);
}
