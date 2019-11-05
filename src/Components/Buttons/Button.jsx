import React from "react";
import "./Button.scss";
export default function Button(props) {
  return (
    <button
      className={`custom-button ${props.googleSignIn ? "googleSignIn" : ""}`}
      onClick={props.onclick}
    >
      {props.value}
    </button>
  );
}
