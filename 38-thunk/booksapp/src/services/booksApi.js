class BookApi {
  static fetchBooks(genre) {
    return fetch(
      `https://www.googleapis.com/books/v1/volumes?q=subject:${
        genre
      }&maxResults=40`
    ).then(res => res.json());
  }
}
export default BookApi;
