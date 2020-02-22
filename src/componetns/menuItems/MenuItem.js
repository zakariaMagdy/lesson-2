import React from "react";
import "./MenuItem.scss";

function MenuItem({ title }) {
  return (
    <div className="menu-item">
      <div className="content">
        <div className="title">{title}</div>
        <span className="subtitle">SHOP NOW</span>
      </div>
    </div>
  );
}

export default MenuItem;