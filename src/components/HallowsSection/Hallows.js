import React from 'react';
import Icon1 from '../Images/Butterbeer.jpg';
import Icon2 from '../Images/chess.jpeg';
import Icon3 from '../Images/harry-potter-christmas-cr-everett.webp';
import { 
    HallowsContainer, 
    HallowsH1, 
    HallowsWrapper, 
    HallowsCard, 
    HallowsCardWrapper, 
    CardFront, 
    CardBack, 
    HallowsIcon, 
    HallowsH2, 
    HallowsP 
} from './HallowsElements';

const Hallows = () => {
    return (
        <HallowsContainer id="christmas-traditions">
            <HallowsH1>Christmas Traditions</HallowsH1>
            
            <HallowsWrapper>
                <HallowsCard>
                    <HallowsCardWrapper>
                        <CardFront>
                            <HallowsIcon src={Icon1} alt="Butterbeer" />
                            <HallowsH2>Butterbeer</HallowsH2>
                        </CardFront>
                        <CardBack>
                            <HallowsP>A sweet and creamy Hogsmeade favorite.</HallowsP>
                        </CardBack>
                    </HallowsCardWrapper>
                </HallowsCard>
                <HallowsCard>
                    <HallowsCardWrapper>
                        <CardFront>
                            <HallowsIcon src={Icon2} alt="Wizard's Chess" />
                            <HallowsH2>Wizard's Chess</HallowsH2>
                        </CardFront>
                        <CardBack>
                            <HallowsP>A lively chess game where enchanted pieces battle on command.</HallowsP>
                        </CardBack>
                    </HallowsCardWrapper>
                </HallowsCard>
                <HallowsCard>
                    <HallowsCardWrapper>
                        <CardFront>
                            <HallowsIcon src={Icon3} alt="Feast" />
                            <HallowsH2>Feast!!!</HallowsH2>
                        </CardFront>
                        <CardBack>
                            <HallowsP>
                                A grand spread of roast meats, pies, and magical desserts like treacle tart and pumpkin pasties.
                            </HallowsP>
                        </CardBack>
                    </HallowsCardWrapper>
                </HallowsCard>
            </HallowsWrapper>
        </HallowsContainer>
    );
};

export default Hallows;
