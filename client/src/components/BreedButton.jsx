import React from 'react';

const BreedButton = (props) => (
      <button onClick={() => props.handleButtonClick(props.breed)}
          className={`${props.lastclicked} waves-effect waves-light btn`}>{props.breed}
      </button>
  )

export default BreedButton;
