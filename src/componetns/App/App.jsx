import React from "react";
import { Switch, Route, BrowserRouter, Redirect } from "react-router-dom";
import { connect } from "react-redux";

import HomePage from "../../pages/HomePage/Homepage";
import ShopPage from "../../pages/ShopPage/ShopPage";
import Header from "../Header/Header";
import SignPage from "../../pages/SignPage/SignPage";
import CheckoutPage from "../../pages/CheckoutPage/CheckoutPage";

import { selectCurrentUser } from "../../redux/Users/UserSelector";

import { checkUserState } from "../../redux/Users/UserAction";

class App extends React.Component {
  componentDidMount() {
    const { checkState } = this.props;
    checkState();
  }
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Header />
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/shop" component={ShopPage} />
            <Route
              exact
              path="/signin"
              render={() =>
                this.props.currentuser ? <Redirect to="/" /> : <SignPage />
              }
            />
            <Route path="/checkout" component={CheckoutPage} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  currentuser: selectCurrentUser(state)
});

const mapDispatchToProps = dispatch => ({
  checkState: () => dispatch(checkUserState())
});
export default connect(mapStateToProps, mapDispatchToProps)(App);
