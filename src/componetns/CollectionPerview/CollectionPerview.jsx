import React from "react";
import "./CollectionPerview.scss";
import CollectionItem from "../CollectionItem/CollectionItem";
import { withRouter } from "react-router-dom";

function CollectionPerview({ title, routeName, items, history, match }) {
  return (
    <div
      className="collectionPerview"
      // onClick={() => {
      //   history.push(`${match.url}/${routeName}`);
      // }}
    >
      <h1 className="collectionPerview__title">{title.toUpperCase()}</h1>
      <div className="collectionPerview__items">
        {items.slice(0, 4).map(({ id, ...others }) => (
          <CollectionItem key={id} {...others} />
        ))}
      </div>
    </div>
  );
}

export default withRouter(CollectionPerview);
