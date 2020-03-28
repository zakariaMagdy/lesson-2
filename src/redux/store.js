import { createStore, applyMiddleware, compose } from "redux";
import logger from "redux-logger";
import rootReducer from "./rootReducer";
import reduxThunk from "redux-thunk";
import { persistStore } from "redux-persist";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const middelwares = [reduxThunk];

if (process.env.NODE_ENV == "development") {
  middelwares.push(logger);
}

const Store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(...middelwares))
);

const persistor = persistStore(Store);
export { Store, persistor };
