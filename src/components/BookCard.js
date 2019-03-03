import React, {Component} from "react";
import {Card, CardBody, CardHeader, CardImg, CardLink, CardSubtitle, CardText, CardTitle} from "reactstrap";
import './BookCard.css';

class BookCard extends Component {

  render() {
    let authors = [];
    if (this.props.book.volumeInfo.authors) {
      authors = this.props.book.volumeInfo.authors.map((author) => {
        return (
          <span className="author" key={author}>
            &nbsp;*&nbsp;{author}
          </span>
        )
      });

    }
    return (
      <Card>
        <CardImg top width="100%"
                 src={this.props.book.volumeInfo.imageLinks ? this.props.book.volumeInfo.imageLinks.smallThumbnail : this.props.book.volumeInfo.imageLinks}
                 alt="{this.props.book.volumeInfo.title}"/>
        <CardBody className="text-center">
          <CardHeader>
            {this.props.book.volumeInfo.title}
          </CardHeader>
          <CardTitle>
            {authors}
          </CardTitle>
          <CardSubtitle className="publisher">
            {this.props.book.volumeInfo.publisher}
          </CardSubtitle>
          <CardText>
            <span dangerouslySetInnerHTML={{
              __html: this.props.book.searchInfo ? this.props.book.searchInfo.textSnippet : this.props.book.volumeInfo.title
            }}/>
          </CardText>
          <CardLink href={this.props.book.volumeInfo.infoLink}>more details</CardLink>
        </CardBody>
      </Card>
    );
  }
}

export default BookCard;
