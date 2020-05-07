import React from "react";

import classes from "./toolbar.module.css";
import NavItems from "./NavItems/NavItems";

const toolbar = () => (
  <header className={classes.toolbar}>
    <NavItems />
    <div className={classes.logo}>
      <span className={classes.firstCol}>Lib</span>
      <span className={classes.secondCol}>Logistic</span>
    </div>
  </header>
);

export default toolbar;
