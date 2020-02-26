import React from "react";
import "./Button.scss";

function Button({ children, ...other }) {
  return <button className="custom-button">{children}</button>;
}

export default Button;
