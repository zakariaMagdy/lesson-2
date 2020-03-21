import Types from "./UserTypes";
const initialState = {};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case Types.SET_CURRENT_USER:
      return {
        ...state,
        currentUser: action.payload
      };

    default:
      return state;
  }
};
