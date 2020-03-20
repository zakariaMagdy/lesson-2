import React from "react";
import "./CollectionItem.scss";

import { connect } from "react-redux";
import { addCartItem } from "../../redux/Cart/CartActions";

function CollectionItem({ id, name, imageUrl, price, addItem }) {
  return (
    <div className="collectionItem">
      <figure className="collectionItem__figure">
        <button
          className="collectionItem__btn"
          onClick={() => addItem({ id, name, price, imageUrl })}
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

const mapDispatchtoProps = dispatch => ({
  addItem: item => dispatch(addCartItem(item))
});

export default connect(null, mapDispatchtoProps)(CollectionItem);
