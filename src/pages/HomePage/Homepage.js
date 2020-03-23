import React from "react";
import "./Homepage.scss";
import MenuContainer from "../../componetns/menuContainer/MenuContainer";

import { connect } from "react-redux";
import { selectSections } from "../../redux/Directory/DirectorySelector";

const HomePage = ({ homeSections }) => {
  return (
    <div className="homepage">
      <h1 className="homepage__title">Welcome to my Homepage</h1>
      <MenuContainer titles={homeSections} />
    </div>
  );
};

const mapStateToProps = state => ({ homeSections: selectSections(state) });
export default connect(mapStateToProps)(HomePage);
