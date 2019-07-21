import React from 'react';
import DogImage from './DogImage.jsx'
import '../styles/DogImagesList.css'

const DogImagesList = props => (
  <div className="dog-images-list">
    {props.dogImages.map((imageURL, idx) => (
      <DogImage key={idx} imageURL={imageURL}></DogImage>
    ))}
  </div>
);

export default DogImagesList;