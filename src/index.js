import React from "react";
import ReactDOM from "react-dom";
import App from "./componetns/App/App";
import "./componetns/App/App.scss";
import { Store, persistor } from "./redux/store";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

ReactDOM.render(
  <Provider store={Store}>
    <PersistGate persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>,
  document.getElementById("root")
);
