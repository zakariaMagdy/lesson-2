import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./App.scss";
import Store from "./redux/store";
import { Provider } from "react-redux";

ReactDOM.render(
  <Provider store={Store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
