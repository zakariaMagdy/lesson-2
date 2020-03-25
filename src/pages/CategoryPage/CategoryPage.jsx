import React from "react";
import "./CategoryPage.scss";
import CollectionItem from "../../componetns/CollectionItem/CollectionItem";
import { connect } from "react-redux";
import { selectCategory } from "../../redux/Directory/DirectorySelector";

const CategoryPage = ({ category }) => {
  return (
    <div className="collection-page">
      <h1 className="title">{category.title}</h1>
      <div className="items">
        {category.items.map(item => (
          <CollectionItem key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => {
  return { category: selectCategory(ownProps.match.params.categoryId)(state) };
};

export default connect(mapStateToProps)(CategoryPage);
