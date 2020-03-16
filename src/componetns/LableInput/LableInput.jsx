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
        onBlur={e => {
          const label = e.target.parentElement.lastElementChild;
          !e.target.value.length && label.classList.remove("shrink");
        }}
      />
      {label && (
        <label
          className={`group__label ${other.value.length && "shrink"}`}
          onClick={e => {
            e.target.classList.add("shrink");
            e.target.parentElement.firstElementChild.focus();
          }}
        >
          {label}
        </label>
      )}
    </div>
  );
}

export default LableInput;
