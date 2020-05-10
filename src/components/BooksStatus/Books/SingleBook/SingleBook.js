import React from "react";

import Control from "./Control/Control";
import classes from "./singleBook.module.css";

const singleBook = (props) => (
  <li>
    <div className={classes.wrapper}>
      <h3>{props.title}</h3>
      <div className={classes.controls}>
        <Control type="available" />
        <Control type="state" />
        <Control type="switch" />
      </div>
    </div>
  </li>
);

export default singleBook;
