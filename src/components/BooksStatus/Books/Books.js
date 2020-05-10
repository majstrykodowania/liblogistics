import React, { Component } from "react";
import axios from "axios";

import SingleBook from "./SingleBook/SingleBook";
import Spinner from "../../Spinner/Spinner";
import classes from "./books.module.css";

class Books extends Component {
  state = {
    loading: true,
    books: [],
  };

  componentDidMount() {
    // Pobranie z bazy tablicy Books i przypisane do state books
    axios
      .get("https://liblogistic.firebaseio.com/books.json")
      .then((response) => {
        // Przekonwertowanie otrzymanego obiektu na tablicę obiektów
        let booksArray = Object.values(response.data);
        this.setState({ books: booksArray });
        this.setState({ loading: false });
      })
      .catch((error) => console.log(error));
  }

  render() {
    // Wyświetlenie spinnera na podstawie state loading
    let singleBooks = <Spinner />;
    if (!this.state.loading)
      if (this.state.books) {
        singleBooks = this.state.books.map((book, id) => {
          if (book) return <SingleBook key={id} title={book.title} />;
          else return null;
        });
      } else {
        singleBooks = <p>Brak książek w bazie</p>;
      }

    return <ul className={classes.Books}>{singleBooks}</ul>;
  }
}

export default Books;
