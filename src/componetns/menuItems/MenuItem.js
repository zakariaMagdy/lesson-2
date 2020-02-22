import React from "react";
import "./MenuItem.scss";

function MenuItem({ title, size, imageUrl }) {
  return (
    <div className={`menu-item ${size ? size : ""}`}>
      <div
        className="image"
        style={{ backgroundImage: `url(${imageUrl})` }}
      ></div>
      <div className="content">
        <div className="title">{title.toUpperCase()}</div>
        <span className="subtitle">SHOP NOW</span>
      </div>
    </div>
  );
}

export default MenuItem;
