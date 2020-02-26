import React from "react";
import "./LableInput.scss";

function LableInput({ handelChange, label, ...other }) {
  return (
    <div className="group">
      <input
        type={other.type}
        required
        onChange={handelChange}
        value={other.value}
        name={other.name}
        className={`group__input ${other.name === "password" && "pass"}`}
        autoComplete="off"
      />
      {label && (
        <label className={`group__label ${other.value.length && "shrink"}`}>
          {label}
        </label>
      )}
    </div>
  );
}

export default LableInput;
