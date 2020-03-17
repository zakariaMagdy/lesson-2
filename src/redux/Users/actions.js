import Types from "./actionsTypes";

export const setUser = user => ({
  type: Types.SET_CURRENT_USER,
  payload: user
});
