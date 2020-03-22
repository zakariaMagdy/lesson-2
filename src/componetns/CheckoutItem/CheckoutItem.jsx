import React from "react";
import "./Checkout-item.scss";

import { connect } from "react-redux";
import {
  removeCartItem,
  addCartItem,
  decreaseQuentity
} from "../../redux/Cart/CartActions";

const CheckoutItem = ({ cartItem, removeItem, incQuantity, decQuantity }) => {
  const { name, imageUrl, price, quantity } = cartItem;
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={imageUrl} alt="item" />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <span
          className="dec"
          onClick={() => {
            decQuantity(cartItem);
          }}
        >
          &#10094;
        </span>
        {quantity}
        <span className="inc" onClick={() => incQuantity(cartItem)}>
          &#10095;
        </span>
      </span>
      <span className="price">{price}</span>
      <div className="remove-button" onClick={() => removeItem(cartItem)}>
        &#10005;
      </div>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  removeItem: item => dispatch(removeCartItem(item)),
  incQuantity: item => dispatch(addCartItem(item)),
  decQuantity: item => dispatch(decreaseQuentity(item))
});
export default connect(null, mapDispatchToProps)(CheckoutItem);
