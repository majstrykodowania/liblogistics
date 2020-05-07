import React, { Component } from "react";
import styles from "./CreateBook.module.css";

class CreateBook extends Component {
  state = {
    title: "",
    author: "",
    released: "",
    description: "",
    quantity: "",
  };

  handleChangeInput = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  render() {
    return (
      <div className={styles.formContainer}>
        <h1 className={styles.label}>DODAJ KSIĄŻKĘ</h1>
        <form className={styles.form}>
          <input
            name="title"
            value={this.state.title}
            onChange={this.handleChangeInput}
            placeholder="tytuł"
          />
          <input
            name="author"
            value={this.state.author}
            onChange={this.handleChangeInput}
            placeholder="autor"
          />
          <input
            name="released"
            value={this.state.released}
            onChange={this.handleChangeInput}
            placeholder="data wydania"
          />
          <input
            name="quantity"
            value={this.state.quantity}
            onChange={this.handleChangeInput}
            placeholder="ilość"
          />
          <textarea
            name="description"
            value={this.state.description}
            onChange={this.handleChangeInput}
            placeholder="opis"
          />
          <div className={styles.buttonsWrapper}>
            <button className={styles.btnCreate}>Dodaj</button>
            <button className={styles.btnReset}>Resetuj</button>
          </div>
        </form>
      </div>
    );
  }
}

export default CreateBook;
