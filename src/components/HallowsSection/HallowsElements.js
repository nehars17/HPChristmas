import styled from 'styled-components';

export const HallowsContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 50px 0;
    background: #f5f5f5;
`;

export const HallowsH1 = styled.h1`
    font-size: 2.5rem;
    color: #333;
    margin-bottom: 50px;
`;

export const HallowsWrapper = styled.div`
    display: flex;
    justify-content: center;
    gap: 20px;
    flex-wrap: wrap;
`;

export const HallowsCard = styled.div`
    width: 300px;
    height: 400px;
    perspective: 1000px; /* Enables the 3D effect */
    cursor: pointer;
    position: relative; /* Ensures proper stacking of front and back */
`;

export const CardFront = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    backface-visibility: hidden; /* Hides the back when the front is shown */
    background: #fff;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    transition: transform 0.6s ease-in-out;
    transform: rotateY(0); /* Default state */
    z-index: 2; /* Ensure it's above the back by default */
`;

export const CardBack = styled(CardFront)`
    background: #333;
    color: #fff;
    transform: rotateY(180deg); /* Starts flipped */
    z-index: 1; /* Ensure it's below the front by default */
`;

export const HallowsCardWrapper = styled.div`
    width: 100%;
    height: 100%;
    transform-style: preserve-3d; /* Maintain 3D effect */
    transition: transform 0.6s ease-in-out;

    ${HallowsCard}:hover & {
        transform: rotateY(180deg); /* Flip the card on hover */
    }
`;

export const HallowsIcon = styled.img`
    width: 150px;
    height: 150px;
    margin-bottom: 20px;
    border-radius: 10px;
`;

export const HallowsH2 = styled.h2`
    font-size: 1.5rem;
    color: #444;
`;

export const HallowsP = styled.p`
    font-size: 1rem;
    text-align: center;
    padding: 10px;
    line-height: 1.5;
`;
