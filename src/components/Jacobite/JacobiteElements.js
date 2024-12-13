import styled from 'styled-components';
import { Link as LinkScroll } from 'react-scroll';

export const JacobiteContainer = styled.div`
    background: #0d0d0d;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 30px;
    height: 100vh;
    position: relative;
    z-index: 1;

    /* Add a dark overlay */
    :before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: linear-gradient(
            180deg, 
            rgba(0, 0, 0, 0.2) 0%, 
            rgba(0, 0, 0, 0.6) 100%
        ), 
        linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%, transparent 100%);
        z-index: 2;
    }
`;

export const JacobiteBg = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
`;

export const VideoBg = styled.video`
    width: 100%;
    height: 100%;
    -o-object-fit: cover;
    object-fit: cover;
    background: #232a34;
`;

export const JacobiteContent = styled.div`
    z-index: 3;
    max-width: 1200px;
    position: absolute;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const JacobiteImg = styled.img`
    width: 300px;
    height: auto;
    border-radius: 10px;
    margin-bottom: 24px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.5), 0 6px 20px rgba(0, 0, 0, 0.3);
    transition: all 0.3s ease-in-out; /* Smooth transition for hover effect */

    &:hover {
        transform: scale(1.05); /* Slightly zoom in the image */
        box-shadow: 0 0 20px 5px rgba(255, 204, 0, 0.8); /* Glowing effect */
    }
`;


export const JacobiteP = styled.p`
    font-size: 2rem;
    text-align: center;
    color: #ffcc00;
    font-family: 'Brush Script MT', cursive;
    text-shadow: 0px 0px 20px rgba(255, 204, 0, 0.8), 0px 0px 30px rgba(255, 204, 0, 0.6);
    margin-bottom: 40px;
`;

export const JacobiteBtnWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const ArrowForward = styled.div`
    margin-left: 8px;
    font-size: 20px;
    transition: transform 0.2s ease-in-out;

    ${JacobiteBtnWrapper}:hover & {
        transform: translateX(5px);
    }
`;

export const ArrowRight = styled.div`
    margin-left: 8px;
    font-size: 20px;
    transition: transform 0.2s ease-in-out;
`;

export const Buttonscroll = styled(LinkScroll)`
    border-radius: 50px;
    background: ${({ primary }) => (primary ? '#ffcc00' : '#010606')};
    white-space: nowrap;
    padding: 14px 48px;
    color: ${({ dark }) => (dark ? '#010606' : '#fff')};
    font-size: 20px;
    outline: none;
    border: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;

    &:hover {
        background: ${({ primary }) => (primary ? '#fff' : '#ffcc00')};
        color: ${({ dark }) => (dark ? '#010606' : '#010606')};
        box-shadow: 0px 0px 20px 5px #ffcc00;
        transition: 0.4s ease-in-out;
    }
`;
