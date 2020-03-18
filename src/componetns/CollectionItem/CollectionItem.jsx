import React from "react";
import "./CollectionItem.scss";

import { connect } from "react-redux";
import { addCartItem } from "../../redux/Cart/CartActions";

function CollectionItem({ name, imageUrl, price, addCartItem }) {
  return (
    <div className="collectionItem">
      <figure className="collectionItem__figure">
        <button
          className="collectionItem__btn"
          onClick={() => addCartItem({ name, price, imageUrl })}
        >
          add to chart{" "}
        </button>
        <img className="collectionItem__image" src={imageUrl} alt="" />
      </figure>
      <div className="collectionItem__data">
        <p>{name}</p>
        <p> ${price}</p>
      </div>
    </div>
  );
}

export default connect(null, { addCartItem })(CollectionItem);
