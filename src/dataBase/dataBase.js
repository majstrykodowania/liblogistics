import axios from "axios";

export const addNewBook = (newBook) => {
  axios
    .post("https://liblogistic.firebaseio.com/books.json", newBook)
    .then((response) => console.log(response))
    .catch((error) => console.log(error));
};
