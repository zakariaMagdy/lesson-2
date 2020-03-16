import React from "react";
import "./CollectionItem.scss";

function CollectionItem({ name, imageUrl, price }) {
  return (
    <div className="collectionItem">
      <figure className="collectionItem__figure">
        <button className="collectionItem__btn">add to chart </button>
        <img className="collectionItem__image" src={imageUrl} alt="" />
      </figure>
      <div className="collectionItem__data">
        <p>{name}</p>
        <p> ${price}</p>
      </div>
    </div>
  );
}

export default CollectionItem;
