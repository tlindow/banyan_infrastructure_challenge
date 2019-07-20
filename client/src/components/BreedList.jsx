import React from 'react';
import BreedButton from './BreedButton.jsx';

const BreedList = props => (
  <div className="breed-list">
    {props.breedList.map(breed => (
      <BreedButton breed={breed}></BreedButton>
    ))}
  </div>
);

export default BreedList;
