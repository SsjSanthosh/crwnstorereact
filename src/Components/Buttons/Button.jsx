import React from "react";
import "./Button.scss";
export default function Button(props) {
  return (
    <button
      className={`custom-button ${props.inverted ? "inverted" : ""}`}
      onClick={props.onclick}
    >
      {props.value}
    </button>
  );
}
