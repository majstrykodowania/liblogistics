import React from "react";

import Control from "./Control/Control";
import classes from "./singleBook.module.css";

const singleBook = (props) => {
  const available = props.readers < props.quantity;
  const availableQuantity = props.quantity - props.readers;

  return (
    <li>
      <div className={classes.wrapper}>
        <h3>{props.title}</h3>
        <div className={classes.controls}>
          <Control type="available" available={available} />
          <Control
            type="state"
            quantity={props.quantity}
            availableQuantity={availableQuantity}
          />
          <Control type="switch" />
        </div>
      </div>
    </li>
  );
};

export default singleBook;
