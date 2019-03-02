import React, {Component} from 'react';
import SearchBook from './components/SearchBook'
import BookList from "./components/BookList";
import * as _ from 'lodash';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Alert, Col, Collapse, Container, Nav, Navbar, NavbarBrand, NavbarToggler, NavItem, Row} from 'reactstrap';
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
          <NavbarBrand href="/">React Book Finder</NavbarBrand>
          <NavbarToggler onClick={this.toggle}/>
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <SearchBook className="header" onSearchQueryChange={
                  (term) => {
                    bookSearch(term);
                    this.setState({query: term});
                  }}/>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
        <Container>
          <Row>
            <Col xs="12">
              <Alert color="secondary" className="clearfix">
                Displaying books on: {this.state.query}
              </Alert>

            </Col>
          </Row>
          <BookList className="clearfix" books={this.state.books}/>
        </Container>
      </div>
    );
  }
}

export default App;
