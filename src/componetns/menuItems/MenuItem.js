import React from "react";
import { withRouter } from "react-router-dom";
import "./MenuItem.scss";

function MenuItem({ title, size, imageUrl, linkUrl, history, match }) {
  console.log(match, history);
  return (
    <div
      className={`menu-item ${size ? size : ""}`}
      onClick={() => {
        history.push(`${match.url}${linkUrl}`);
      }}
    >
      <div
        className="image"
        style={{ backgroundImage: `url(${imageUrl})` }}
      ></div>
      <div className="content">
        <div className="title">{title.toUpperCase()}</div>
        <span className="subtitle">SHOP NOW </span>
      </div>
    </div>
  );
}

export default withRouter(MenuItem);
