import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchBooks } from "../actions/books";

class BookList extends Component {
  componentDidMount() {
    this.props.fetchBooks();
  }
  render() {
    console.log(this.props);
    const bookItems = this.props.books.map(book => {
      let title = book.volumeInfo.title;
      return <li>{title}</li>;
    });
    // const bookItems = this.props.books.map(book => {
    //   return <li>{book.title}</li>;
    // });
    return <div>{this.props.isLoading ? <p>Loading...</p> : bookItems}</div>;
  }
}

function mapStateToProps(state) {
  return {
    isLoading: state.isLoading,
    books: state.books
  };
}

export default connect(mapStateToProps, { fetchBooks })(BookList);
