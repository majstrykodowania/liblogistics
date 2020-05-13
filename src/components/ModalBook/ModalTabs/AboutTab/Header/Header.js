import React from "react";
import classes from "./Header.module.css";

const Header = ({ title }) => (
  <div className={classes.headerWrapper}>
    <img src="https://source.unsplash.com/random" alt="Cover of book" />
    <h1 className={classes.title}>{title}</h1>
  </div>
);

export default Header;
