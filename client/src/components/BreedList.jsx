import React from 'react';
import BreedButton from './BreedButton.jsx';

const BreedList = (props) => (
  <div className="breed-list">
    {props.breedList.map((breed, idx) => {
      let lastClicked;
      if (props.lastClicked === breed) {
        lastClicked = "last-clicked";
      } else {
        lastClicked = "";
      }
      return (<BreedButton key={`${breed}_${idx}`} 
                  breed={breed}
                  handleButtonClick={props.handleButtonClick}
                  lastclicked={lastClicked}></BreedButton>)
    })}
  </div>
)
 

export default BreedList;
