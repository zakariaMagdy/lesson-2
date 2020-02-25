import React, { Component } from "react";
import Shop_Data from "./Shop_Data";
import CollectionPerview from "../../componetns/CollectionPerview/CollectionPerview";
import "./ShopPage.scss";

export default class ShopPage extends Component {
  state = {
    collections: Shop_Data
  };
  render() {
    const { collections } = this.state;
    return (
      <div className="ShopPage">
        <h1 className="ShopPage__title">Collection</h1>
        {collections.map(({ id, ...others }) => (
          <CollectionPerview key={id} {...others} />
        ))}
      </div>
    );
  }
}
