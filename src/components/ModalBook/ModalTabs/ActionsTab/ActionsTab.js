import React from "react";

import classes from "./actionsTab.module.css";
import { updateSingleBookReaders } from "../../../../dataBase/dataBase";

const ActionsTab = (props) => {
  const letBook = () => {
    const isAvailable =
      props.book.quantity - props.book.currentReaders.length > 0;
    if (isAvailable) {
      let newArray = [...props.book.currentReaders, "user"];
      updateSingleBookReaders(props.id, newArray);
    } else console.log("brak dostępnych");
  };
  const takeBook = () => {
    if (props.book.currentReaders.length > 0) {
      let newArray = [...props.book.currentReaders].slice(1);
      updateSingleBookReaders(props.id, newArray);
    } else console.log("brak czytelników");
  };

  return (
    <>
      <div className={classes.buttonsWrapper}>
        <h1>Wykonaj operację</h1>
        <input type="text" placeholder="Wprowadź ID czytelnika" />
        <div className={classes.buttons}>
          <button className={classes.btnOut} onClick={letBook}>
            Wydaj
          </button>
          <button className={classes.btnIn} onClick={takeBook}>
            Przyjmij
          </button>
        </div>
      </div>
    </>
  );
};

export default ActionsTab;
