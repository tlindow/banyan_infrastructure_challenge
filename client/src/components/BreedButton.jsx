import React from 'react';

const BreedButton = (props) => {
  return (
    <button onClick={() => {
      props.handleButtonClick(props.breed);
    }}
            className={props.lastclicked.toString()}>{props.breed}
    </button>
  )
}

export default BreedButton;
