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
        this.setState({ books: response.data });
        this.setState({ loading: false });
      })
      .catch((error) => console.log(error));
  }

  render() {
    // Wyświetlenie spinnera na podstawie state loading
    let singleBooks = <Spinner />;
    if (!this.state.loading)
      singleBooks = this.state.books.map((book, id) => {
        return <SingleBook key={id} title={book.title} />;
      });

    return <ul className={classes.Books}>{singleBooks}</ul>;
  }
}

export default Books;
