import React from "react";

import "./CartDropDown.scss";
import CustomButton from "../Button/Button";
import CartItem from "../CartIttem/CartItem";
import { connect } from "react-redux";

const CartDropDown = ({ cartItems }) => {
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems.map(item => (
          <CartItem key={item.id} {...item} />
        ))}
      </div>
      <CustomButton>Go to Checkout </CustomButton>
    </div>
  );
};

const mapStateToProps = state => {
  return { cartItems: state.cart.cartItems };
};

export default connect(mapStateToProps)(CartDropDown);
