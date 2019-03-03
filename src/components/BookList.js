import React, {Component} from "react";
import BookCard from "./BookCard";
import {Col, Row} from "reactstrap";

class BookList extends Component {
  render() {
    const bookList = this.props.books.map((book) => {
      return (
        <Col md="3" key={book.etag}>
          <BookCard book={book} key={book.etag}/>
        </Col>
      );
    });

    return (
      <Row>
        {bookList}
      </Row>
    );
  }
}

export default BookList;
