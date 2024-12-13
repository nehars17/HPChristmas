import React, { useState } from 'react';
import { MapContainer, MapBg, ImgBg, MapContent, MapHeading, BtnWrap, ImgBg2 } from './MapElements';
import Map1 from '../Images/marauders-map-bg.jpg';
import Map2 from '../Images/marauders-map-img.gif';
import { Buttonclick } from '../ButtonElements';

const MapSection = () => {
  const [isMapHidden, setIsMapHidden] = useState(false);

  const handleFadeMap = () => {
    setIsMapHidden(true);
  };

  return (
    <MapContainer id='marauders-map'>
      <MapBg>
        <ImgBg src={Map1} alt="Marauder's Map" />
      </MapBg>
      {!isMapHidden ? (
        <MapContent id="hide-it">
          <MapHeading>Marauder's Map</MapHeading>
          <ImgBg2 src={Map2} alt="Marauder's Map" />
          <BtnWrap>
            <Buttonclick onClick={handleFadeMap}>Mischief Managed</Buttonclick>
          </BtnWrap>
        </MapContent>
      ) : (
        <MapContent id="unhide-it">
          <MapHeading>You are seriously on the naughty list of Santa!</MapHeading>
        </MapContent>
      )}
    </MapContainer>
  );
};

export default MapSection;
