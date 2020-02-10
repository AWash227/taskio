import React from "react";
import "./Button.scss";

export const Button = props => {
  return (
    <button className="button" onClick={props.onClick}>
      {props.children}
    </button>
  );
};

export default Button;
