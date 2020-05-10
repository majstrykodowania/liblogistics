import React from "react";

import classes from "./control.module.css";

const control = (props) => {
  switch (props.type) {
    case "available":
      return (
        <div className={classes.Control}>
          <p>Status</p>
          <p>dostępne</p>
        </div>
      );
    case "state":
      return (
        <div className={classes.Control}>
          <p>Stan</p>
          <p>2/4</p>
        </div>
      );
    case "switch":
      return <button className={classes.Control}>Edit</button>;
    default:
      return <p>Choose option</p>;
  }
};

export default control;
