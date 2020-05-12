import React, { Component } from "react";
import classes from "./ModalBook.module.css";

class ModalBook extends Component {
  state = {};
  render() {
    const { id, closeModal } = this.props;
    return (
      <>
        <div className={classes.containerModal}>
          <div className={classes.wrapperModal}>
            <h1>modal</h1>
            <h3>id ksiazki: {id}</h3>
            <button onClick={closeModal}>Close modal</button>
          </div>
        </div>
      </>
    );
  }
}

export default ModalBook;
