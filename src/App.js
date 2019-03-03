import React, {Component} from 'react';
import SearchBook from './components/SearchBook'
import BookList from "./components/BookList";
import * as _ from 'lodash';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Col, Collapse, Container, Navbar, NavbarBrand, NavbarToggler, Row} from 'reactstrap';
import BookService from './services/BookService';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
      query: 'React'
    };

    this.bookSearch(this.state.query);
  }

  async bookSearch(query) {
    const books = await BookService.bookSearch(query);
    this.setState({books});
  }

  render() {
    const bookSearch = _.debounce(term => {
      this.bookSearch(term)
    }, 300);
    return (
      <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">alexandria</NavbarBrand>
          <NavbarToggler onClick={this.toggle}/>
          <Collapse isOpen={this.state.isOpen} navbar>
          </Collapse>
        </Navbar>
        <Container className="align-content-center">
          <Row>
            <Col xs="12" className="m-2">
              <SearchBook className="header" onSearchQueryChange={
                (term) => {
                  bookSearch(term);
                  this.setState({query: term});
                }}/>
            </Col>
          </Row>
          <BookList className="m-2 align-content-center" books={this.state.books}/>
        </Container>
      </div>
    );
  }
}

export default App;
