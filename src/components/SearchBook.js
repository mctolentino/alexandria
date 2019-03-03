import React, {Component} from 'react';
import Input from "reactstrap/es/Input";

class SearchBook extends Component {
  constructor(props) {
    super(props);
    this.state = {query: ''}
  }

  render() {
    return (
      <Input
        value={this.state.query}
        onChange={event => this.onInputChange(event.target.value)}
      />
    );
  }

  onInputChange(query) {
    this.setState({query});
    this.props.onSearchQueryChange(query);
  }
}

export default SearchBook;
