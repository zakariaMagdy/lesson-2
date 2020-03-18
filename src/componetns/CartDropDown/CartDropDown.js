import React from "react";

import "./CartDropDown.scss";
import CustomButton from "../Button/Button";
import ShoppingItem from "../ShoppingItem/ShoppingItem";
import { connect } from "react-redux";

const CartDropDown = ({ cartItems }) => {
  return (
    <div className="cart-dropdown">
      <div className="cart-item">
        {cartItems.map(item => (
          <ShoppingItem key={item.name} {...item} />
        ))}
      </div>
      <CustomButton>Go to Checkout</CustomButton>
    </div>
  );
};

const mapStateToProps = ({ cart: { cartItems } }) => {
  return { cartItems };
};
export default connect(mapStateToProps)(CartDropDown);
