import React from 'react';
import BreedList from './BreedList.jsx'

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      breedList: [],
      breedListLength: 12,
    }
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
          breedList: breedListArr.slice(0, breedListLength),
        });
      });
  }

  render() {
    return (
      <React.Fragment>
        <h1>
          Breed Names
        </h1>
        <BreedList breedList={this.state.breedList}></BreedList>
      </React.Fragment>
    )
  }
}

export default App;