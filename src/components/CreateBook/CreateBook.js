import React, { Component } from "react";
import styles from "./CreateBook.module.css";
import { booksDb } from "../../dataBase/booksDb";
import axios from "axios";

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

  handleCreateBook = (e) => {
    e.preventDefault();
    const newBook = {
      id: booksDb.length + 1,
      ...this.state,
      currentReaders: [],
      history: [],
    };

    axios
      .post("https://liblogistic.firebaseio.com/books.json", newBook)
      .then((response) => console.log(response))
      .catch((error) => console.log(error));

    this.resetInputs();
  };

  resetInputs = () => {
    this.setState({
      title: "",
      author: "",
      released: "",
      description: "",
      quantity: "",
    });
  };

  render() {
    return (
      <div className={styles.formContainer}>
        <h1 className={styles.label}>DODAJ KSIĄŻKĘ</h1>
        <form className={styles.form} onSubmit={this.handleCreateBook}>
          <input
            name="title"
            value={this.state.title}
            onChange={this.handleChangeInput}
            placeholder="tytuł"
            required
          />
          <input
            name="author"
            value={this.state.author}
            onChange={this.handleChangeInput}
            placeholder="autor"
            required
          />
          <input
            type="number"
            name="released"
            value={this.state.released}
            onChange={this.handleChangeInput}
            placeholder="data wydania"
            required
          />
          <input
            name="quantity"
            value={this.state.quantity}
            onChange={this.handleChangeInput}
            placeholder="ilość"
            required
          />
          <textarea
            name="description"
            value={this.state.description}
            onChange={this.handleChangeInput}
            placeholder="opis"
            rows="6"
            required
          />
          <div className={styles.buttonsWrapper}>
            <button className={styles.btnCreate} type="submit">
              Dodaj
            </button>
            <button className={styles.btnReset} onClick={this.resetInputs}>
              Resetuj
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default CreateBook;
