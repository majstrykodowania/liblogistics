import React from "react";
import classes from "./ButtonCloseModal.module.css";

const ButtonCloseModal = (props) => (
  <button className={classes.btnClose} onClick={props.closeModal}>
    Zamknij
  </button>
);

export default ButtonCloseModal;
