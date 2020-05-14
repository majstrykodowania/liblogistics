import React from "react";

import classes from "./actionsTab.module.css";
import { updateSingleBookReaders } from "../../../../dataBase/dataBase";
import { updateBorrowHistory } from "../../../../dataBase/dataBase";

const today = new Date();
const date =
  today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate();

const ActionsTab = (props) => {
  const letBook = () => {
    const isAvailable =
      props.book.quantity - props.book.currentReaders.length > 0;
    if (isAvailable) {
      const event = {
        reader: props.inputValue,
        borrowDate: date,
        returnDate: "",
      };
      const newArray = [...props.book.currentReaders, event];
      updateSingleBookReaders(props.id, newArray);
    } else console.log("brak dostępnych");
    props.closeModal();
  };

  const takeBook = () => {
    let borrowHistory = props.book.borrowHistory;
    if (props.book.currentReaders.length > 0) {
      props.book.currentReaders.map((obj, index) => {
        if (obj.reader === props.inputValue) {
          borrowHistory.push({
            reader: obj.reader,
            borrowDate: obj.borrowDate,
            returnDate: date,
          });
          props.book.currentReaders.splice(index, 1);
          return obj;
        } else return obj;
      });
      let newArray = props.book.currentReaders.filter(
        (obj) => obj.reader !== props.inputValue
      );
      console.log(newArray);
      updateSingleBookReaders(props.id, newArray);
      updateBorrowHistory(props.id, borrowHistory);
    } else console.log("Brak takiego czytelnika");
    props.closeModal();
  };

  return (
    <>
      <div className={classes.buttonsWrapper}>
        <h1>Wykonaj operację</h1>
        <input
          type="text"
          placeholder="Wprowadź ID czytelnika"
          value={props.inputValue}
          onChange={props.inputValueChange}
        />
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
