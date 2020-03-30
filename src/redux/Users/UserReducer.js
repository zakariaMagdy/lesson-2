import Types from "./UserTypes";
const INITAL_USER = {
  currentUser: null,
  errorMsg: null
};

export const userReducer = (state = INITAL_USER, action) => {
  switch (action.type) {
    case Types.SIGN_IN_SUCCESS:
      return {
        ...state,
        currentUser: action.payload,
        errorMsg: null
      };

    case Types.SIGN_IN_FAIL:
    case Types.SIGN_UP_FAIL:
    case Types.SIGN_OUT_FAIL:
      return {
        ...state,
        errorMsg: action.payload
      };

    case Types.SIGN_OUT_SUCCESS:
      return { ...state, errorMsg: null, currentUser: null };

    case Types.REMOVE_ERROR:
      return { ...state, errorMsg: null };

    default:
      return state;
  }
};
