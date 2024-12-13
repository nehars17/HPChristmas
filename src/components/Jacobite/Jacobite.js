import React, { useState } from 'react';
import JacobiteVideo from '../Videos/hogwarts-express.mp4';
import HarryPotterImage from '../Images/kk.jpeg';
import { JacobiteContainer, JacobiteBg, VideoBg, JacobiteContent, JacobiteImg, JacobiteP, JacobiteBtnWrapper, ArrowForward, ArrowRight } from './JacobiteElements';
import { Buttonscroll } from '../ButtonElements';

const JacobiteSection = () => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };

  return (
    <JacobiteContainer>
      <JacobiteBg>
        <VideoBg autoPlay loop muted src={JacobiteVideo} type='video/mp4' />
      </JacobiteBg>
      <JacobiteContent>
        <JacobiteImg src={HarryPotterImage} />
        <JacobiteP>
          Merry Christmas!
        </JacobiteP>
        <JacobiteBtnWrapper>
          <Buttonscroll
            to='hogwarts'
            onMouseEnter={onHover}
            onMouseLeave={onHover}
            primary="true"
            dark="true"
            smooth={true}
            duration={500}
            spy={true}
            exact='true'
          >
            Begin {hover ? <ArrowForward /> : <ArrowRight />}
          </Buttonscroll>
        </JacobiteBtnWrapper>
      </JacobiteContent>
    </JacobiteContainer>
  );
};

export default JacobiteSection;
