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
            <h3>Status</h3>
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
          <h3>Stan</h3>
          <p>
            {props.availableQuantity}/{props.quantity}
          </p>
        </div>
      );
    case "switch":
      return (
        <button
          className={classes.Control}
          onClick={() => props.openModal(props.id)}
        >
          Edit
        </button>
      );
    default:
      return <p>Choose option</p>;
  }
};

export default control;
