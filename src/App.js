import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import HomePage from "./pages/HomePage/Homepage";
import ShopPage from "./pages/ShopPage/ShopPage";
import Header from "./componetns/Header/Header";
import SignPage from "./pages/SignPage/SignPage";

import { auth } from "./fireBase/FireBaseConfig";

import { setUser } from "./redux/Users/actions";
import { connect } from "react-redux";

class App extends React.Component {
  closeSubscription = null;
  componentDidMount() {
    const { setUser } = this.props;

    this.closeSubscription = auth.onAuthStateChanged(user => {
      setUser(user);
      console.log(user);
    });
  }

  componentWillUnmount() {
    this.closeSubscription();
  }
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Header />
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/shop" component={ShopPage} />
            <Route exact path="/signin" component={SignPage} />
            <Route exact path="/shop/hats" />
            <Route exact path="/shop/jackets" />
            <Route exact path="/shop/womens" />
            <Route exact path="/shop/mens" />
            <Route />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

// const mapDispatchToProp = dispatch => ({
//   setUser: user => dispatch(setUser(user))
// });

const mapStateToProps = state => ({
  crrentUser: state.user
});

export default connect(mapStateToProps, { setUser })(App);
