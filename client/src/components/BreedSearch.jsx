import React from 'react';
import '../styles/breedSearch.css'

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
        <input className="breed-search" 
               onChange={(e) => this.handleSearch(e.target.value)}
               placeholder="Search a dog breed!"></input>
      </React.Fragment>
    );
  }
}

export default BreedSearch;