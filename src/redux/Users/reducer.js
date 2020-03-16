const initialState = null;

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_CURRENT_USER":
      return action.payload;

    default:
      return state;
  }
};
