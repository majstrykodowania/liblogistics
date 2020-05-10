import React from "react";

import crossImg from "../../../../../assets/images/cross.png";
import checkImg from "../../../../../assets/images/check.png";
import classes from "./control.module.css";

const control = (props) => {
  switch (props.type) {
    case "available":
      return (
        <div className={classes.Control}>
          <div className={classes.state}>
            <p>Status</p>
            {props.available ? (
              <img src={checkImg} alt="" className={classes.image} />
            ) : (
              <img src={crossImg} alt="" className={classes.image} />
            )}
          </div>
        </div>
      );
    case "state":
      return (
        <div className={classes.Control}>
          <p>Stan</p>
          <p>
            {props.availableQuantity}/{props.quantity}
          </p>
        </div>
      );
    case "switch":
      return <button className={classes.Control}>Edit</button>;
    default:
      return <p>Choose option</p>;
  }
};

export default control;
