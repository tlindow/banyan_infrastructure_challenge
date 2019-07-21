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
      cachedDogImages: {},
      lastClicked: '',
    }
    this.listSize = 12;
    this.cachedDogImages = {};
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
    });
    this.setState({
      filteredBreedList: filteredBreedList.slice(0, this.listSize),
    });
  }

  handleButtonClick(breed) {
    if (this.state.cachedDogImages[breed]) {
      this.setState({
        dogImages: this.state.cachedDogImages[breed],
        lastClicked: breed,
      })
    } else {
      fetch(`https://dog.ceo/api/breed/${breed}/images`)
        .then((res) => {
          return res.json();
        })
        .then((json) => {
          if (!this.cachedDogImages[breed]) {
            this.cachedDogImages[breed] = json.message;
          }
          this.setState({
            dogImages: json.message,
            cachedDogImages: this.cachedDogImages,
            lastClicked: breed,
          });
        });
    }
  }

  render() {
    return (
      <div className='app-container'>
        <h2>
          Dog Pictures!
        </h2>
        <BreedSearch searchBreedList={this.searchBreedList.bind(this)}></BreedSearch>
        <BreedList breedList={this.state.filteredBreedList}
                   handleButtonClick={this.handleButtonClick.bind(this)}
                   lastClicked={this.state.lastClicked}></BreedList>
        <DogImagesList dogImages={this.state.dogImages}></DogImagesList>
      </div>
    )
  }
}

export default App;