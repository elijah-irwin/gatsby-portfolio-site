import React from 'react';
import styled, { keyframes } from 'styled-components';
import { ArrowDownCircle } from 'react-feather';

import Headshot from './Headshot';

const About = () => {
  return (
    <Wrap>

      <Text>
        <Header>.about</Header>
        <P>A <Span>developer</Span> and <Fancy>(on occasion)</Fancy> <Span>designer</Span> passionate about simplifying development workflows. You can usually find me busy refactoring something.</P>
        <P>Currently working at <Span>TD Securities</Span> as a <Span>Technical Lead</Span> developing tools to simplify the creation of new apps.</P>
      </Text>

      <Headshot />

      <Bottom>
        <ArrowDownCircle />
      </Bottom>
    </Wrap>
  );
};

export default About;

const Wrap = styled.div`
  min-height: 100vh;
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 50px;
  align-items: center;
`;

const Header = styled.h2`
  font-size: 4rem;
  font-weight: 600;
  letter-spacing: 3px;
  margin-bottom: 20px;
  color: ${props => props.theme.text.header};
`;

const Text = styled.div`
`;

const P = styled.p`
  font-size: 1.8rem;
  margin-bottom: 20px;
  font-weight: 400;
`;

const Span = styled.span`
  color: ${props => props.theme.text.accent};
`;

const Fancy = styled.span`
  font-family: 'Caveat', cursive;
  font-weight: 500;
`;

const bounce = keyframes`
  0% { transform: translateY(0px); }
  50% { transform: translateY(-8px); }
  100% { transform: translateY(0px); }
`;

const Bottom = styled.div`
  color: ${props => props.theme.text.accent};
  position: absolute;
  bottom: 40px;
  left: 52%;
  animation: ${bounce} 2s ease-in-out infinite;

  & svg {
    height: 40px;
    width: 40px;
  }
`;
