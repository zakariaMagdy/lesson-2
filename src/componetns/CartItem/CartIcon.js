import React from "react";
import "./CartIcon.scss";
import { ReactComponent as ShoppingItem } from "../../assets/11.3 shopping-bag.svg.svg";
import { connect } from "react-redux";
import { toggleCartDropdown } from "../../redux/Cart/CartActions";

const CartIcon = ({ toggleCartDropdown, cart }) => {
  return (
    <div className="cart-icon" onClick={toggleCartDropdown}>
      <ShoppingItem className="cart-icon__shopping-icon" />
      <span className="cart-icon__item-count">0</span>
    </div>
  );
};

const mapStateToProps = ({ cart: { show } }) => ({
  cart: show
});
export default connect(mapStateToProps, { toggleCartDropdown })(CartIcon);
