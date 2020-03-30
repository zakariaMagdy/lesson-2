import React from "react";
import "./ErrorBox.scss";

const ErrorBox = ({ msg }) => {
  return (
    <div className="error-box">
      <p className="">{msg}</p>
    </div>
  );
};

export default ErrorBox;
