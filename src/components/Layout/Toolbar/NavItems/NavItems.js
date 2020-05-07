import React from "react";

import classes from "./navItems.module.css";
import NavItem from "./NavItem/NavItem";

const navItems = () => (
  <ul className={classes.navItems}>
    <NavItem link="/" active>
      STATUS
    </NavItem>
    <NavItem link="/create">AKCJE</NavItem>
  </ul>
);

export default navItems;
