import React, { useEffect, useState } from "react";
import "./ShopPage.scss";

import { Route } from "react-router-dom";
import CollectionOverview from "../../componetns/CollectionOverview/CollectionOverview";
import CategoryPage from "../CategoryPage/CategoryPage";

import { connect } from "react-redux";
import { fetchingData } from "../../redux/Shop/ShopActions";
import { selectIsFetching } from "../../redux/Shop/shopSelector";

import WithSpinner from "../../componetns/WithSpinner/WithSpinner";

/////

const CollectionOverviewWithSpinner = WithSpinner(CollectionOverview);
const CategoryPageWithSpinenr = WithSpinner(CategoryPage);

///////////////

const ShopPage = ({ match, AddDataToShop, isfetching }) => {
  useEffect(() => {
    AddDataToShop();
    console.log(isfetching);
  }, []);
  return (
    <div className="shop-page">
      <Route
        exact
        path={`${match.path}`}
        render={props => (
          <CollectionOverviewWithSpinner isLoading={isfetching} />
        )}
      />

      <Route
        path={`${match.path}/:categoryId`}
        render={props => (
          <CategoryPageWithSpinenr isLoading={isfetching} {...props} />
        )}
      />
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  AddDataToShop: () => dispatch(fetchingData())
});

const mapStateToProps = state => {
  return {
    isfetching: selectIsFetching(state)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ShopPage);
//old-sky.surge.sh
