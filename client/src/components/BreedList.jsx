import React from 'react';
import BreedButton from './BreedButton.jsx';

const BreedList = props => (
  <div className="breed-list">
    {props.breedList.map((breed, idx) => (
      <BreedButton key={`${breed}_${idx}`} breed={breed}></BreedButton>
    ))}
  </div>
);

export default BreedList;
