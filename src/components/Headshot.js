import React, { useState, useEffect, useContext } from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import styled from 'styled-components';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';

// Contexts 
import { AppContext } from '../contexts/AppContext';

// Styles
import './Headshot.css';

const Headshot = () => {
  const { darkTheme } = useContext(AppContext);

  return (
    <Wrapper>
      <StaticImage src='../assets/1.jpg' alt='head shot' className={darkTheme ? 'dark' : 'light'} width={300} quality={100} />
      <MessageMe href='#'>Message Me</MessageMe>
      <Socials>
        <FaLinkedinIn />
        <FaGithub />
      </Socials>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const MessageMe = styled.a`
  margin: 30px;
  padding: 15px 40px;
  font-size: 1.6em;
  font-weight: 600;
  white-space: nowrap;
  letter-spacing: 0.5px;
  border-radius: 50px;
  background-color: ${p => p.theme.color1};
  color: ${p => p.theme.buttonText};
  box-shadow: 0px 2px 6px rgba(0,0,0,0.25);

  &:hover {
    transform: scale(1.02, 1.02);
  }
`;

const Socials = styled.div`
  display: flex;
  justify-content: center;

  & svg {
    height: 25px;
    width: 25px;
    cursor: pointer;

    &:first-child {
      margin-right: 20px;
    }
  }
`;

export default Headshot;
