import React, { useState } from 'react';
import { 
  ForestContainer, 
  ForestBg, 
  ImgBg, 
  Highlight, 
  HighlightBox, 
  ForestContent, 
  ForestHeading, 
  ForestSubtitle, 
  PatronusButton 
} from './ForestElements';
import ForestImg from '../Images/forbidden-forest.jpg'; // Default Forbidden Forest image
import PatronusGif from '../Images/patronus.gif'; // GIF for Patronus animations
import PatronusStatic from '../Images/dogPatronus.avif'; // Static Patronus image

const Forest = () => {
  const [isGifPlaying, setIsGifPlaying] = useState(true);

  const togglePatronus = () => {
    setIsGifPlaying((prev) => !prev);
  };

  return (
    <ForestContainer id='the-forbidden-forest'>
      <Highlight />
      <ForestBg>
        <ImgBg 
          src={isGifPlaying ? PatronusGif : PatronusStatic} 
          alt={isGifPlaying ? 'Patronus Animation' : 'Static Patronus'} 
        />
      </ForestBg>
      <ForestContent>
        <HighlightBox />
        <ForestHeading>The Forbidden Forest</ForestHeading>
        <ForestSubtitle>Unleash your Patronus!</ForestSubtitle>
        <PatronusButton onClick={togglePatronus}>
          {isGifPlaying ? 'Stop Patronus' : 'Cast Patronus'}
        </PatronusButton>
      </ForestContent>
    </ForestContainer>
  );
};

export default Forest;
