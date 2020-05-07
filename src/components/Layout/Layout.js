import React from "react";

import classes from "./layout.module.css";
import Toolbar from "./Toolbar/Toolbar";

const Layout = (props) => (
  <div className={classes.layout}>
    <Toolbar />
    {props.children}
  </div>
);

export default Layout;
