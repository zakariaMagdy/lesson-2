import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import HomePage from "./pages/HomePage/Homepage";
import ShopPage from "./pages/ShopPage/ShopPage";
import Header from "./componetns/Header/Header";
import SignPage from "./pages/SignPage/SignPage";

///
const PageNotFount = () => <div>404</div>;
class App extends React.Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Header />
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/shop" component={ShopPage} />
            <Route exact path="/signin" component={SignPage} />
            <Route exact path="/shop/hats" component={PageNotFount} />
            <Route exact path="/shop/jackets" component={PageNotFount} />
            <Route exact path="/shop/womens" component={PageNotFount} />
            <Route exact path="/shop/mens" component={PageNotFount} />
            <Route component={PageNotFount} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
