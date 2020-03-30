import React from "react";
import "./Header.scss";
import { ReactComponent as Logo } from "../../assets/4.4 crown.svg.svg";
import CartIcon from "../CartIcon/CartIcon";
import CartDropDown from "../CartDropDown/CartDropDown";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { selectCartToggle } from "../../redux/Cart/cartSelector";
import { selectCurrentUser } from "../../redux/Users/UserSelector";
import { signOutStart } from "../../redux/Users/UserAction";

const Header = ({ currentUser, isShowCart, signOut }) => {
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
          <div className="header__options__link" onClick={signOut}>
            Sign out
          </div>
        ) : (
          <Link to="/signin" className="header__options__link">
            sign in
          </Link>
        )}

        <CartIcon />
      </div>
      {isShowCart && <CartDropDown />}
    </div>
  );
};

const mapStateToprop = state => {
  return {
    currentUser: selectCurrentUser(state),
    isShowCart: selectCartToggle(state)
  };
};

const mapDispatchToProps = dispatch => ({
  signOut: () => dispatch(signOutStart())
});

export default connect(mapStateToprop, mapDispatchToProps)(Header);
