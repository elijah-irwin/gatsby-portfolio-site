import React from 'react';
import styled, { keyframes } from 'styled-components';
import { ArrowDownCircle } from 'react-feather';

const About = () => {
  return (
    <Wrap>
      <TextContent>
        <Header>.about</Header>
        <P>A <Span>developer</Span> and <Fancy>(on occasion)</Fancy> <Span>designer</Span> passionate about simplifying development workflows. You can usually find me busy refactoring something.</P>
        <P>Currently working at <Span>TD Securities</Span> as a <Span>Technical Lead</Span> developing tools to simplify the creation of new apps.</P>
      </TextContent>
      <DownArrow><ArrowDownCircle /></DownArrow>
    </Wrap>
  );
};

export default About;

const Wrap = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

const TextContent = styled.div`
  max-width: 54%;
  margin-top: auto;
`;

const Header = styled.h2`
  font-size: 4rem;
  font-weight: 600;
  letter-spacing: 3px;
  margin-bottom: 20px;
  color: ${props => props.theme.text.header};
`;

const P = styled.p`
  font-size: 2rem;
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

const DownArrow = styled.div`
  color: ${props => props.theme.text.accent};
  display: flex;
  justify-content: center;
  margin-top: auto;
  padding-bottom: 40px;
  animation: ${bounce} 2s ease-in-out infinite;

  & svg {
    height: 40px;
    width: 40px;
  }
`;
