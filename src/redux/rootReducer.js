import { combineReducers } from "redux";
import { userReducer } from "./Users/UserReducer";
import { CartReducer } from "./Cart/CartReducer";
import { ShopReducer } from "./Shop/ShopReducer";
import { SectionReducer } from "./Sections/SectionsReducer";

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
  shop: ShopReducer,
  itemSections: SectionReducer
});

export default persistReducer(persistConfig, RootReducer);
