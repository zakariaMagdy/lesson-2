import React from "react";
import "./CollectionOverview.scss";

import CollectionPerview from "../CollectionPerview/CollectionPerview";

import { connect } from "react-redux";
import { selectItemsforPerview } from "../../redux/Shop/shopSelector";

const CollectionOverview = ({ collections }) => {
  return (
    <div className="collection-overview">
      <div className="ShopPage">
        {collections.map(({ id, ...others }) => (
          <CollectionPerview key={id} {...others} />
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  collections: selectItemsforPerview(state)
});
export default connect(mapStateToProps)(CollectionOverview);
