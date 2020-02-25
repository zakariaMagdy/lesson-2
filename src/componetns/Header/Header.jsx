import React from "react";
import "./Header.scss";
import { ReactComponent as Logo } from "../../assets/4.4 crown.svg.svg";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <Link to="./">
        <Logo className="header__logo" />
      </Link>

      <div className="header__options">
        <Link to="/shop" className="header__options__link">
          Shop
        </Link>
        <Link to="/contact" className="header__options__link">
          Contact
        </Link>
        <Link to="/signin" className="header__options__link">
          Sign in
        </Link>
      </div>
    </div>
  );
};

export default Header;
