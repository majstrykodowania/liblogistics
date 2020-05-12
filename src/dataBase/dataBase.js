import db from "../config/fbConfig";

export const addNewBook = (newBook) => {
  db.collection("books").add(newBook);
};

export const getBookList = async () => {
  let booksArr = [];
  const books = await db
    .collection("books")
    .get()
    .then((snapshot) => {
      snapshot.forEach((book) => {
        booksArr.push({ id: book.id, ...book.data() });
      });
    });
  return booksArr;
};
