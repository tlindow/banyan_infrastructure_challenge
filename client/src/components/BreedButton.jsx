import React from 'react';

const BreedButton = props => (
  <button onClick={() => props.handleButtonClick(props.breed)}>{props.breed}</button>
);

export default BreedButton;
