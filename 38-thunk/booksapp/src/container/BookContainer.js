import React, { Component } from "react";
import BookList from "./BookList";

class BookContainer extends Component {
  render() {
    console.log("Book Container");
    return (
      <div>
        <BookList />
      </div>
    );
  }
}

export default BookContainer;
