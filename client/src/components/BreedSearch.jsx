import React from 'react';

class BreedSearch extends React.Component {
  constructor() {
    super();
    this.state = {
      query: '',
    }
  }

  handleSearch(query) {
    this.setState({
      query, 
    }, () => {
      this.props.searchBreedList(this.state.query); 
    });
  }

  render() {
    return (
      <React.Fragment>
        <input onChange={(e) => this.handleSearch(e.target.value)}></input>
      </React.Fragment>
    );
  }
}

export default BreedSearch;