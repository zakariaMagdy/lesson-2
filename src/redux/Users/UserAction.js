import Types from "./UserTypes";

export const googleSignInStart = () => ({
  type: Types.GOOGLE_SIGN_IN_START
});

export const emailSignInStart = (email, pass) => ({
  type: Types.EMAIL_SIGN_IN_START,
  email,
  pass
});

export const signInFail = errorMsg => ({
  type: Types.SIGN_IN_FAIL,
  payload: errorMsg
});

export const signInSuccess = user => ({
  type: Types.SIGN_IN_SUCCESS,
  payload: user
});

export const removeError = () => ({
  type: Types.REMOVE_ERROR
});

export const signOutStart = () => ({
  type: Types.SIGN_OUT_START
});

export const signOutSuccess = () => ({
  type: Types.SIGN_OUT_SUCCESS
});

export const signOutFail = msg => ({
  type: Types.SIGN_OUT_FAIL,
  payload: msg
});

export const checkUserState = () => ({
  type: Types.CHECK_USER_STATE
});

export const signUpStart = ({ email, password, displayName }) => ({
  type: Types.SIGN_UP_START,
  payload: { email, password, displayName }
});

export const signUpFail = msg => ({
  type: Types.SIGN_UP_FAIL,
  payload: msg
});
