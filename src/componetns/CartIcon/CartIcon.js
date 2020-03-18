import React from "react";
import "./CartIcon.scss";
import { ReactComponent as ShoppingItem } from "../../assets/11.3 shopping-bag.svg.svg";
import { connect } from "react-redux";
import { toggleCartDropdown } from "../../redux/Cart/CartActions";

const CartIcon = ({ toggleCartDropdown, itemsnum }) => {
  return (
    <div className="cart-icon" onClick={toggleCartDropdown}>
      <ShoppingItem className="cart-icon__shopping-icon" />
      <span className="cart-icon__item-count">{itemsnum}</span>
    </div>
  );
};

const mapStateToProps = ({ cart: { cartItems } }) => ({
  itemsnum: cartItems.reduce((prev, curr) => prev + curr.quantity, 0)
});
export default connect(mapStateToProps, { toggleCartDropdown })(CartIcon);
