import React from "react";

import classes from "./Button.module.css";

function UserButton(props) {
  return (
    <button
      type={props.type || "button"}
      className={`${classes.button} ${props.className}`}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
}

export default UserButton;
