import React from "react";
import "./ShopPage.scss";

import { Route } from "react-router-dom";
import CollectionOverview from "../../componetns/CollectionOverview/CollectionOverview";
import CategoryPage from "../CategoryPage/CategoryPage";

const ShopPage = ({ match }) => {
  console.log(match.path);
  return (
    <div className="shop-page">
      <Route exact path={`${match.path}`} component={CollectionOverview} />
      <Route path={`${match.path}/:categoryId`} component={CategoryPage} />
    </div>
  );
};

export default ShopPage;
