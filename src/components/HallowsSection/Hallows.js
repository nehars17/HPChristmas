import React from 'react';
import Icon1 from '../Images/Butterbeer.jpg';
import Icon2 from '../Images/chess.jpeg';
import Icon3 from '../Images/harry-potter-christmas-cr-everett.webp';
import { HallowsContainer, HallowsH1, HallowsWrapper, HallowsCard, HallowsIcon, HallowsH2, HallowsP } from './HallowsElements';

const Hallows = () => {
return (
    <HallowsContainer id="christmas-traditions">
            <h1 class="christmasHeader">Christmas Traditions</h1>
            
            <HallowsWrapper>
                    <HallowsCard>
                            <HallowsIcon src={Icon1} />
                            <HallowsH2>Butterbeer</HallowsH2>
                            <HallowsP> Hogsmeade favorite</HallowsP>
                    </HallowsCard>
                    <HallowsCard>
                            <HallowsIcon src={Icon2} />
                            <HallowsH2>Wizard's Chess </HallowsH2>
                            <HallowsP>A lively chess game where enchanted pieces battle on command</HallowsP>
                    </HallowsCard>
                    <HallowsCard>
                            <HallowsIcon src={Icon3} />
                            <HallowsH2>Feast!!!</HallowsH2>
                            <HallowsP>A grand spread of roast meats, pies, and magical desserts like treacle tart and pumpkin pasties, all under floating candles and a starlit ceiling.</HallowsP>
                    </HallowsCard>
            </HallowsWrapper>
    </HallowsContainer>
);
};

export default Hallows;