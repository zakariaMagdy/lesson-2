import { createStore, applyMiddleware, compose } from "redux";
// import logger from "redux-logger";
import rootReducer from "./rootReducer";
import { persistStore } from "redux-persist";

// const middelwares = [logger];
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const Store = createStore(rootReducer, composeEnhancers(applyMiddleware()));

const persistor = persistStore(Store);
export { Store, persistor };
