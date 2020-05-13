import React, { Component } from "react";
import { getBookList } from "../../../dataBase/dataBase";

import SingleBook from "./SingleBook/SingleBook";
import Spinner from "../../Spinner/Spinner";
import classes from "./books.module.css";
import ModalBook from "../../ModalBook/ModalBook";

class Books extends Component {
  state = {
    loading: true,
    books: [],
    error: null,
    openModal: false,
    openModalId: null,
  };

  componentDidMount() {
    // Pobranie z bazy tablicy Books i przypisane do state books
    this.setState({ loading: true });

    getBookList()
      .then((books) =>
        this.setState({
          loading: false,
          books,
        })
      )
      .catch((err) =>
        this.setState({
          error: err.message,
          loading: false,
        })
      );
  }

  handleOpenModal = (id) => {
    this.setState({
      openModal: true,
      openModalId: id,
    });
  };

  handleCloseModal = () => {
    this.setState({
      openModal: false,
      openModalId: null,
    });
  };

  render() {
    // Wyświetlenie spinnera na podstawie state loading
    const singleBooks = this.state.books.map((book) => (
      <SingleBook
        key={book.id}
        id={book.id}
        title={book.title}
        quantity={book.quantity}
        readers={book.currentReaders ? book.currentReaders.length : 0}
        openModal={this.handleOpenModal}
      />
    ));

    const modal = this.state.openModal && (
      <ModalBook
        id={this.state.openModalId}
        closeModal={this.handleCloseModal}
      />
    );
    const spinner = this.state.loading && <Spinner />;
    const error = this.state.error && <h3>{this.state.error}</h3>;
    const books = !this.state.loading && !this.state.error && (
      <ul className={classes.Books}>{singleBooks}</ul>
    );

    return (
      <>
        {modal}
        {spinner}
        {error}
        {books}
      </>
    );
  }
}

export default Books;
