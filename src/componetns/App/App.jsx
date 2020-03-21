import React from "react";
import { Switch, Route, BrowserRouter, Redirect } from "react-router-dom";
import { connect } from "react-redux";

import HomePage from "../../pages/HomePage/Homepage";
import ShopPage from "../../pages/ShopPage/ShopPage";
import Header from "../Header/Header";
import SignPage from "../../pages/SignPage/SignPage";
import CheckoutPage from "../../pages/CheckoutPage/CheckoutPage";

import { auth, createUserProfileDocument } from "../../fireBase/FireBaseConfig";

import { setUser } from "../../redux/Users/UserAction";
import { selectCurrentUser } from "../../redux/Users/UserSelector";

class App extends React.Component {
  closeSubscription = null;
  componentDidMount() {
    const { setCurrentUser } = this.props; //action for add data to store

    this.closeSubscription = auth.onAuthStateChanged(async userAuth => {
      try {
        if (userAuth) {
          const userRef = await createUserProfileDocument(userAuth);

          userRef.onSnapshot(snapshot => {
            setCurrentUser({
              id: snapshot.id,
              ...snapshot.data()
            });
          });
        } else {
          setCurrentUser(null);
        }
      } catch (e) {
        console.log(e);
      }
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
            <Route
              exact
              path="/signin"
              render={() =>
                this.props.currentuser ? <Redirect to="/" /> : <SignPage />
              }
            />
            <Route path="/checkout" component={CheckoutPage} />
            {/* <Route exact path="/shop/hats" />
            <Route exact path="/shop/jackets" />
            <Route exact path="/shop/womens" />
            <Route exact path="/shop/mens" />
            <Route /> */}
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  currentuser: selectCurrentUser(state)
});

const mapDispatchtoProps = dispatch => ({
  setCurrentUser: user => dispatch(setUser(user))
});
export default connect(mapStateToProps, mapDispatchtoProps)(App);
