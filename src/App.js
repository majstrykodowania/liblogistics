import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import BooksStatus from "./components/BooksStatus/BooksStatus";
import CreateBook from "./components/CreateBook/CreateBook";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Layout>
          <Route exact path="/" component={BooksStatus} />
          <Route path="/create" component={CreateBook} />
        </Layout>
      </BrowserRouter>
    );
  }
}

export default App;
