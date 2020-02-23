import React from "react";
import HomePage from "./pages/Homepage";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import "./App.scss";

///

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={HomePage} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
