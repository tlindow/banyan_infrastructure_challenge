import React from 'react';
import BreedButton from './BreedButton.jsx';
import '../styles/breedList.css'

let lastClicked = [];
const BreedList = (props) => (
  <div className="breed-list">
    {props.breedList.map((breed, idx) => {    
      if (idx % 4 === 0) {
        for (let i = 0; i < 4; i++) {
          if (props.lastClicked === props.breedList[idx + i]) {
            lastClicked.push('last-clicked');
          } else {
            lastClicked.push('');
          }
        }

        let clicked = lastClicked;
        lastClicked = [];
        
        return (
          <div className="breed-list-row">
            <BreedButton key={`${props.breedList[idx]}_${idx}`} 
            breed={props.breedList[idx]}
            handleButtonClick={props.handleButtonClick}
            lastclicked={clicked[0]}></BreedButton>
            <BreedButton key={`${props.breedList[idx + 1]}_${idx + 1}`} 
            breed={props.breedList[idx + 1]}
            handleButtonClick={props.handleButtonClick}
            lastclicked={clicked[1]}></BreedButton>
            <BreedButton key={`${props.breedList[idx + 2]}_${idx + 2}`} 
            breed={props.breedList[idx + 2]}
            handleButtonClick={props.handleButtonClick}
            lastclicked={clicked[2]}></BreedButton>
            <BreedButton key={`${props.breedList[idx + 3]}_${idx + 3}`} 
            breed={props.breedList[idx + 3]}
            handleButtonClick={props.handleButtonClick}
            lastclicked={clicked[3]}></BreedButton>
          </div>
        )
      }
      
    })}
  </div>
)
 

export default BreedList;
