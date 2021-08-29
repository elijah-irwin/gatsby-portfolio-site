import React from 'react';
import styled from 'styled-components';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';

const Socials = ({ dark }) => (
  <Wrapper dark={dark}>
    <a
      href='https://www.linkedin.com/in/irwinmck/'
      target='_blank'
      rel='noopener noreferrer'>
      <FaLinkedinIn />
    </a>
    <a
      href='https://github.com/irwinmck'
      target='_blank'
      rel='noopener noreferrer'>
      <FaGithub />
    </a>
  </Wrapper>
);

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  & a {
    text-decoration: none;
    color: ${p => (p.dark ? p.theme.text.color : p.theme.white)};
    margin: 0px 10px;
  }

  & svg {
    height: 25px;
    width: 25px;
    cursor: pointer;
  }
`;

export default Socials;
