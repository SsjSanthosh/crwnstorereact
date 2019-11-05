import React from "react";
import "./FormInput.scss";
export default function FormInput(props) {
  return (
    <div className="group">
      <input
        className="form-input"
        onChange={props.handleChange}
        type={props.type}
      />

      {props.label ? (
        <label
          className={`${props.value.length ? "shrink" : ""} form-input-label`}
        >
          {props.label}
        </label>
      ) : null}
    </div>
  );
}
