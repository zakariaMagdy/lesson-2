import React from "react";
import { Switch, Route, BrowserRouter, Redirect } from "react-router-dom";
import HomePage from "../../pages/HomePage/Homepage";
import ShopPage from "../../pages/ShopPage/ShopPage";
import Header from "../Header/Header";
import SignPage from "../../pages/SignPage/SignPage";

import { auth, createUserProfileDocument } from "../../fireBase/FireBaseConfig";

import { setUser } from "../../redux/Users/actions";
import { connect } from "react-redux";

class App extends React.Component {
  closeSubscription = null;
  componentDidMount() {
    const { setUser } = this.props; //action for add data to store

    this.closeSubscription = auth.onAuthStateChanged(async userAuth => {
      try {
        if (userAuth) {
          const userRef = await createUserProfileDocument(userAuth);

          userRef.onSnapshot(snapshot => {
            setUser({
              id: snapshot.id,
              ...snapshot.data()
            });
          });
        } else {
          setUser(null);
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

const mapStateToProps = ({ user }) => ({
  currentuser: user
});

export default connect(mapStateToProps, { setUser })(App);
