import React from "react";
import "./Button.scss";

function Button({ children, google, ...other }) {
  return (
    <button
      className={`${google ? "custom-button google" : "custom-button"}`}
      {...other}
    >
      {children}
    </button>
  );
}

export default Button;
