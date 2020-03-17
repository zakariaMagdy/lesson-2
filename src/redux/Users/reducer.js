import Types from "./actionsTypes";
const initialState = null;

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case Types.SET_CURRENT_USER:
      return action.payload;

    default:
      return state;
  }
};
