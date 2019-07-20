import React from 'react';
import DogImage from './DogImage.jsx'

const DogImagesList = props => (
  <div className="dog-images-list">
    {props.dogImages.map((imageURL, idx) => (
      <DogImage key={`${idx}`} imageURL={imageURL}></DogImage>
    ))}
  </div>
);

export default DogImagesList;