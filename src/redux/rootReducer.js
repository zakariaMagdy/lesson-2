import { combineReducers } from "redux";
import { userReducer } from "./Users/reducer";

export default combineReducers({
  user: userReducer
});
