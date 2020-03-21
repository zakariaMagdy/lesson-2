import Types from "./UserTypes";

export const setUser = user => ({
  type: Types.SET_CURRENT_USER,
  payload: user
});
