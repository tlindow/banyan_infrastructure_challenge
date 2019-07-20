import React from 'react';
import BreedList from './BreedList.jsx'
import BreedSearch from './BreedSearch.jsx'
import DogImagesList from './DogImagesList.jsx'

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      breedList: [],
      filteredBreedList: [],
      dogImages: [],
    }
    this.listSize = 12;
  }

  componentDidMount() {
    fetch('https://dog.ceo/api/breeds/list/all')
      .then((res) => {
        return res.json();
      })
      .then((json) => {
        const breedListArr = [];
        for (let breeds in json.message) {
          breedListArr.push(breeds);
        }
        this.setState({
          breedList: breedListArr,
          filteredBreedList: breedListArr.slice(0, this.listSize),
        });
      });
  }

  searchBreedList(query) {
    const filteredBreedList = this.state.breedList.filter(breed => {
      return breed.includes(query);
    })
    this.setState({
      filteredBreedList: filteredBreedList.slice(0, this.listSize),
    });
  }

  handleButtonClick(breed) {
    console.log(breed);
    fetch(`https://dog.ceo/api/breed/${breed}/images`)
      .then((res) => {
        return res.json();
      })
      .then((json) => {
        this.setState({
          dogImages: json.message,
        });
      });
  }

  render() {
    return (
      <React.Fragment>
        <h1>
          Breed Names
        </h1>
        <BreedSearch searchBreedList={this.searchBreedList.bind(this)}></BreedSearch>
        <BreedList breedList={this.state.filteredBreedList}
                   handleButtonClick={this.handleButtonClick.bind(this)}></BreedList>
        <DogImagesList dogImages={this.state.dogImages}></DogImagesList>
      </React.Fragment>
    )
  }
}

export default App;