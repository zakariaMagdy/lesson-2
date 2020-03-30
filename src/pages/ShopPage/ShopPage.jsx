import React, { useEffect } from "react";
import "./ShopPage.scss";

import { Route } from "react-router-dom";
import CollectionOverview from "../../componetns/CollectionOverview/CollectionOverview";
import CategoryPage from "../CategoryPage/CategoryPage";

import { connect } from "react-redux";
import { fetchingDataStart } from "../../redux/Shop/ShopActions";
import { selectItemsFetshingState } from "../../redux/Shop/shopSelector";

import WithSpinner from "../../componetns/WithSpinner/WithSpinner";

/////

const CollectionOverviewWithSpinner = WithSpinner(CollectionOverview);
const CategoryPageWithSpinenr = WithSpinner(CategoryPage);

///////////////

const ShopPage = ({ match, AddDataToShop, isfetching }) => {
  useEffect(() => {
    AddDataToShop();
  }, []);
  return (
    <div className="shop-page">
      <Route
        exact
        path={`${match.path}`}
        render={props => (
          <CollectionOverviewWithSpinner isLoading={!isfetching} />
        )}
      />

      <Route
        path={`${match.path}/:categoryId`}
        render={props => (
          <CategoryPageWithSpinenr isLoading={!isfetching} {...props} />
        )}
      />
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  AddDataToShop: () => dispatch(fetchingDataStart())
});

const mapStateToProps = state => {
  return {
    isfetching: selectItemsFetshingState(state)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ShopPage);
//old-sky.surge.sh
