import React from 'react';
import BreedButton from './BreedButton.jsx';
import '../styles/breedList.css'


const BreedList = (props) => (
  props.breedList.length ?
  <div className="breed-list">
    {props.breedList.map((breed, idx) => {    
      let lastClicked = '';
        if (props.lastClicked === breed) {
          lastClicked = 'last-clicked';
        }
        return (
          <BreedButton key={props.breed} 
          breed={breed}
          handleButtonClick={props.handleButtonClick}
          lastclicked={lastClicked}></BreedButton>
        )
      }
    )}
  </div> :
  <h6 className="no-results">No search results found</h6>
)
 

export default BreedList;
