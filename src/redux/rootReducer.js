import { combineReducers } from "redux";
import { userReducer } from "./Users/UserReducer";
import { CartReducer } from "./Cart/CartReducer";
import { DirectoryReducer } from "./Directory/DirectoryReducer";

import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["cart"]
};
const RootReducer = combineReducers({
  user: userReducer,
  cart: CartReducer,
  directory: DirectoryReducer
});

export default persistReducer(persistConfig, RootReducer);
