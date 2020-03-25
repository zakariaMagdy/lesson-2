import React, { useEffect, useState } from "react";
import "./ShopPage.scss";

import { Route } from "react-router-dom";
import CollectionOverview from "../../componetns/CollectionOverview/CollectionOverview";
import CategoryPage from "../CategoryPage/CategoryPage";

import { firestore, getTransformedData } from "../../fireBase/FireBaseConfig";

import { connect } from "react-redux";
import { AddCollections } from "../../redux/Directory/DirectoryActions";

import WithSpinner from "../../componetns/WithSpinner/WithSpinner";

/////

const CollectionOverviewWithSpinner = WithSpinner(CollectionOverview);
const CategoryPageWithSpinenr = WithSpinner(CategoryPage);

///////////////

const ShopPage = ({ match, AddDataToDirectory }) => {
  const [isloading, setIsloading] = useState(true);

  useEffect(() => {
    (async () => {
      const collectionsRef = firestore.collection("collections");

      const unsubscripeCollectionsSnap = collectionsRef.onSnapshot(snapshot => {
        // get data
        const CollectionMap = getTransformedData(snapshot);
        //add data to redux by action

        AddDataToDirectory(CollectionMap);
        setIsloading(false);
      });
    })();
  }, []);
  return (
    <div className="shop-page">
      <Route
        exact
        path={`${match.path}`}
        render={props => (
          <CollectionOverviewWithSpinner isLoading={isloading} />
        )}
      />

      <Route
        path={`${match.path}/:categoryId`}
        render={props => (
          <CategoryPageWithSpinenr isLoading={isloading} {...props} />
        )}
      />
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  AddDataToDirectory: collections => dispatch(AddCollections(collections))
});

export default connect(null, mapDispatchToProps)(ShopPage);
//old-sky.surge.sh
