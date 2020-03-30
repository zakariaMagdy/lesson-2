import { createStore, applyMiddleware, compose } from "redux";
import logger from "redux-logger";
import rootReducer from "./rootReducer";
import { persistStore } from "redux-persist";
import createSagaMiddleware from "redux-saga";
import RootSaga from "./rootSaga";

export const configureStore = () => {
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  const sagaMiddleware = createSagaMiddleware();
  const middelwares = [sagaMiddleware];

  if (process.env.NODE_ENV === "development") {
    middelwares.push(logger);
  }

  const Store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(...middelwares))
  );

  sagaMiddleware.run(RootSaga);

  const persistor = persistStore(Store);
  return { Store, persistor };
};
