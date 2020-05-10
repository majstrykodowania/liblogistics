import React, { Component } from "react";

import SingleBook from "./SingleBook/SingleBook";
import classes from "./books.module.css";

class Books extends Component {
  render() {
    return (
      <ul className={classes.Books}>
        <SingleBook title="Metro 2033" />
        <SingleBook title="Harry Potter" />
        <SingleBook title="Wiedźmin" />
      </ul>
    );
  }
}

export default Books;
