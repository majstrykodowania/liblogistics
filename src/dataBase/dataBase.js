import db from "../config/fbConfig";

export const addNewBook = (newBook) => {
  db.collection("books").add(newBook);
};

export const getBookList = async () => {
  let booksArr = [];
  await db
    .collection("books")
    .get()
    .then((snapshot) => {
      snapshot.forEach((book) => {
        booksArr.push({ id: book.id, ...book.data() });
      });
    });
  return booksArr;
};

export const getSingleBook = async (bookId) => {
  return await db
    .collection("books")
    .doc(bookId)
    .get()
    .then((snapshot) => {
      return snapshot.data();
    });
};

export const updateSingleBookReaders = async (bookId, newArray) => {
  db.collection("books")
    .doc(bookId)
    .update({
      currentReaders: [...newArray],
    });
};
