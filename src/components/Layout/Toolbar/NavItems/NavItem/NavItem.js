import React from "react";
import { NavLink } from "react-router-dom";

import classes from "./navItem.module.css";

const navItem = (props) => (
  <li className={classes.navItem}>
    <NavLink exact to={props.link} activeClassName={classes.active}>
      {props.children}
    </NavLink>
  </li>
);

export default navItem;
