import React from 'react';
import DogImage from './DogImage.jsx'
import '../styles/DogImagesList.css'

const DogImagesList = props => (
  <div className="dog-images-list">
    {props.dogImages.map((imageURL, idx) => {
      if (idx % 3 === 0) {
        return (
          <div className="dog-images-list-row">
            <DogImage key={idx} imageURL={props.dogImages[idx]}></DogImage>
            <DogImage key={idx + 1} imageURL={props.dogImages[idx + 1]}></DogImage>
            <DogImage key={idx + 2} imageURL={props.dogImages[idx + 2]}></DogImage>
          </div>
        )
      }
    })}
  </div>
);

export default DogImagesList;