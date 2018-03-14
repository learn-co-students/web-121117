import BookApi from "../services/booksApi";

export const ADD_BOOK = "ADD_BOOK";
export const FETCHED_BOOKS = "FETCHED_BOOKS";
export const FETCHING_BOOKS = "FETCHING_BOOKS";

export function addBook(book) {
  return {
    type: ADD_BOOK,
    payload: book
  };
}

export function fetchBooks() {
  return function(dispatch) {
    dispatch({ type: "FETCHING_BOOKS" });
    BookApi.fetchBooks("suspense").then(books => {
      dispatch({ type: "FETCHED_BOOKS", payload: books.items });
    });
  };
}
//
// export function fetchBooks() {
//   BookApi.fetchBooks("suspense").then(books => {
//     return {
//       type: FETCHED_BOOKS,
//       payload: books
//     };
//   });
// }
