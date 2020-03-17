import React from "react";

import "./CartDropDown.scss";
import CustomButton from "../Button/Button";

const CartDropDown = () => {
  return (
    <div className="cart-dropdown">
      <div className="cart-item"></div>
      <CustomButton>Go to Checkout</CustomButton>
    </div>
  );
};

export default CartDropDown;
