import React from "react";
import "./Header.scss";
import { ReactComponent as Logo } from "../../assets/4.4 crown.svg.svg";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { auth, signInWithGoogle } from "../../fireBase/FireBaseConfig";
import { setUser } from "../../redux/Users/actions";

const signInSignOut = user => {
  if (user) {
    //signout
  } else {
    //signIn
  }
};

const Header = ({ currentUser }) => {
  return (
    <div className="header">
      <Link to="/">
        <Logo />
      </Link>

      <div className="header__options">
        <Link to="/shop" className="header__options__link">
          Shop
        </Link>
        <Link to="/contact" className="header__options__link">
          Contact
        </Link>
        {currentUser ? (
          <div
            className="header__options__link"
            onClick={() => {
              auth.signOut();
            }}
          >
            Sign out
          </div>
        ) : (
          <Link to="/signin" className="header__options__link">
            sign in
          </Link>
        )}
      </div>
    </div>
  );
};

const mapStateToprop = state => {
  return {
    currentUser: state.user
  };
};

export default connect(mapStateToprop, { setUser })(Header);
