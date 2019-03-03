import React, {Component} from 'react';
import Input from "reactstrap/es/Input";
import {Button, InputGroup, InputGroupAddon} from "reactstrap";

class SearchBook extends Component {
  constructor(props) {
    super(props);
    this.state = {query: ''}
  }

  render() {
    return (
      <div>
        <InputGroup>
          <Input placeholder="Search..." value={this.state.query}
                 onChange={event => this.onInputChange(event.target.value)}/>
          <InputGroupAddon addonType="append">
            <Button color="secondary"
                    onClick={() => this.onClickSearch(this.state.query)}>Search</Button></InputGroupAddon>
        </InputGroup>
      </div>
    );
  }

  onInputChange(query) {
    this.setState({query});
  }

  onClickSearch(query){
    this.props.onSearchQueryChange(query);
  }
}

export default SearchBook;
