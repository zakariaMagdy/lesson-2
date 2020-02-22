import React, { Component } from "react";
import "./MenuContainer.scss";
import MenuItem from "../menuItems/MenuItem";

export class MenuContainer extends Component {
  render() {
    return (
      <div className="directory-menu">
        {this.props.titles.map(({ title, size, id, imageUrl }) => (
          <MenuItem title={title} key={id} size={size} imageUrl={imageUrl} />
        ))}
      </div>
    );
  }
}

export default MenuContainer;
