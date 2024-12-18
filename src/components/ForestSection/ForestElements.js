import styled from "styled-components";

export const ForestContainer = styled.div`
  height: 860px;
  position: relative;
`;

export const ForestBg = styled.div`
  z-index: -1;
  width: 100%;
  height: 100%;
`;

export const ImgBg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const Highlight = styled.div`
  height: 100%;
  width: 100%;
  position: absolute;
  text-align: center;
  opacity: 0.2;
  background: #000428;
  background: -webkit-linear-gradient(to right, #004e92, #000428);
  background: linear-gradient(to right, #004e92, #000428);
`;

export const HighlightBox = styled.div`
  height: 110%;
  width: 100%;
  border-radius: 30px;
  position: absolute;
  text-align: center;
  opacity: 0.4;
  margin-top: -50px;
  background: #d3cce3;
  background: -webkit-linear-gradient(to right, #e9e4f0, #d3cce3);
  background: linear-gradient(to right, #e9e4f0, #d3cce3);
`;

export const ForestContent = styled.div`
  position: absolute;
  top: 200px;
  left: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  max-width: 1000px;
  margin: auto;
  padding: 20px;

  @media screen and (min-width: 510px) and (max-width: 950px) {
    top: 250px;
    padding-left: 5px;
    padding-right: 5px;
  }
`;

export const ForestHeading = styled.div`
  font-family: 'Harry Potter', sans-serif;
  font-size: 5rem;
  letter-spacing: 9px;
  color: #010606;
  z-index: 1;

  @media screen and (max-width: 520px) {
    font-size: 2.5rem;
  }
  @media screen and (min-width: 520px) and (max-width: 730px) {
    font-size: 3rem;
  }
  @media screen and (min-width: 480px) and (max-width: 810px) {
    font-size: 3.5rem;
  }
  @media screen and (min-width: 810px) and (max-width: 950px) {
    font-size: 4rem;
  }
`;

export const ForestSubtitle = styled.div`
  color: #370617;
  font-family: 'Playfair Display SC', serif;
  margin-top: 24px;
  font-size: 4rem;
  z-index: 1;

  @media screen and (max-width: 520px) {
    font-size: 2rem;
  }
  @media screen and (min-width: 520px) and (max-width: 810px) {
    font-size: 2.5rem;
  }
  @media screen and (min-width: 810px) and (max-width: 950px) {
    font-size: 3rem;
  }
`;

// New Component: PatronusButton
export const PatronusButton = styled.button`
  background: #6c63ff;
  color: white;
  font-family: 'Playfair Display SC', serif;
  font-size: 1.2rem;
  padding: 0.8rem 2rem;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  margin-top: 30px;
  transition: all 0.3s ease-in-out;
  z-index: 1;

  &:hover {
    background: #4b47cc;
    transform: scale(1.1);
  }
  &:active {
    transform: scale(1);
  }

  @media screen and (max-width: 520px) {
    font-size: 1rem;
    padding: 0.6rem 1.5rem;
  }
`;
