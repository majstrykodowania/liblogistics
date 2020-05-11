import React, { Component } from "react";
import axios from "axios";

import SingleBook from "./SingleBook/SingleBook";
import Spinner from "../../Spinner/Spinner";
import classes from "./books.module.css";

class Books extends Component {
  state = {
    loading: false,
    books: [],
  };

  componentDidMount() {
    // Pobranie z bazy tablicy Books i przypisane do state books
    this.setState({ loading: true });
    axios
      .get("https://liblogistic.firebaseio.com/books.json")
      .then((response) => {
        // Przekonwertowanie otrzymanego obiektu na tablicę obiektów
        let booksArray = Object.values(response.data);
        this.setState({ books: booksArray });
        this.setState({ loading: false });
      })
      .catch((error) => {
        console.log(error);
        this.setState({ loading: false });
      });
  }

  render() {
    // Wyświetlenie spinnera na podstawie state loading
    let singleBooks = this.state.loading ? (
      <Spinner />
    ) : (
      <p>Brak książek w bazie</p>
    );

    if (this.state.books.length > 0) {
      singleBooks = this.state.books.map((book, id) => {
        return (
          <SingleBook
            key={id}
            title={book.title}
            quantity={book.quantity}
            readers={book.currentReaders ? book.currentReaders.length : 0}
          />
        );
      });
    }

    return <ul className={classes.Books}>{singleBooks}</ul>;
  }
}

export default Books;
