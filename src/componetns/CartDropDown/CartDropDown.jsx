import React from "react";
import "./CartDropDown.scss";

import CustomButton from "../Button/Button";
import CartItem from "../CartIttem/CartItem";

import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { selectCartItems } from "../../redux/Cart/CartSelector";
import { toggleCartDropdown } from "../../redux/Cart/CartActions";

const CartDropDown = ({ cartItems, history, dispatch }) => {
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems.length ? (
          cartItems.map(item => <CartItem key={item.id} {...item} />)
        ) : (
          <span className="empty-message">Your cart is empty</span>
        )}
      </div>
      <CustomButton
        onClick={() => {
          history.push("/checkout");
          dispatch(toggleCartDropdown());
        }}
      >
        Go to Checkout{" "}
      </CustomButton>
    </div>
  );
};

const mapStateToProps = state => {
  return { cartItems: selectCartItems(state) };
};

export default withRouter(connect(mapStateToProps)(CartDropDown));
