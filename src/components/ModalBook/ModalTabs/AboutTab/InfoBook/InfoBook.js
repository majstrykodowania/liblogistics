import React from "react";
import classes from "./InfoBook.module.css";

const InfoBook = (props) => {
  const { author, description, currentReaders, quantity, released } = props;

  return (
    <div className={classes.infoWrapper}>
      <div className={classes.basics}>
        <div className={classes.info}>
          <h1>Autor</h1>
          <p>{author}</p>
        </div>
        <div className={classes.info}>
          <h1>Data wydania</h1>
          <p>{released}</p>
        </div>
        <div className={classes.info}>
          <h1>Stan magazynowy</h1>
          <p>
            {currentReaders && quantity - currentReaders.length}/{quantity}
          </p>
        </div>
      </div>
      <span className={classes.line}></span>
      <div className={classes.description}>
        <h1>Opis</h1>
        <p>{description}</p>
      </div>
    </div>
  );
};
export default InfoBook;
