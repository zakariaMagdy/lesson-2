import React from "react";
import "./shoppingItem.scss";

const ShoppingItem = ({ name, price, quantity }) => {
  return (
    <div className="shoppingItem">
      <p>{name}</p>
      <p>{price}</p>
      <p>{`${quantity} x ${price}`}</p>
    </div>
  );
};

export default ShoppingItem;
