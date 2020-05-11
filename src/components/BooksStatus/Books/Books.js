import React, { Component } from "react";
import axios from "axios";

import SingleBook from "./SingleBook/SingleBook";
import Spinner from "../../Spinner/Spinner";
import classes from "./books.module.css";

class Books extends Component {
  state = {
    loading: true,
    books: [],
    error: null,
  };

  componentDidMount() {
    // Pobranie z bazy tablicy Books i przypisane do state books
    this.setState({ loading: true });
    axios
      .get("https://liblogistic.firebaseio.com/books.json")
      .then((response) => {
        if (response.statusText === "OK" && !response.data)
          throw Error("Brak książek w bazie");
        return response;
      })
      .then((response) => {
        // Przekonwertowanie otrzymanego obiektu na tablicę obiektów
        let booksArray = Object.values(response.data);
        this.setState({ books: booksArray, loading: false });
      })
      .catch((error) => {
        this.setState({
          error: error.message,
          loading: false,
        });
      });
  }

  render() {
    // Wyświetlenie spinnera na podstawie state loading
    const singleBooks = this.state.books.map((book, id) => (
      <SingleBook
        key={id}
        title={book.title}
        quantity={book.quantity}
        readers={book.currentReaders ? book.currentReaders.length : 0}
      />
    ));

    return (
      <>
        {this.state.loading && <Spinner />}
        {this.state.error && <h3>{this.state.error}</h3>}
        {!this.state.loading && !this.state.error && (
          <ul className={classes.Books}>{singleBooks}</ul>
        )}
      </>
    );
  }
}

export default Books;
