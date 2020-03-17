import { combineReducers } from "redux";
import { userReducer } from "./Users/reducer";
import { CartReducer } from "./Cart/CartReducer";

export default combineReducers({
  user: userReducer,
  cart: CartReducer
});
