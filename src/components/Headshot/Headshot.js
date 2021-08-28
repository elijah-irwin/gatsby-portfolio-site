import React, { useContext } from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';

// Contexts
import { AppContext } from '../../contexts/AppContext';

// Styles
import './Headshot.css';
import { Wrapper, MessageMe, Socials } from './Headshot.styles';

const Headshot = ({ className }) => {
  const { darkTheme } = useContext(AppContext);

  return (
    <Wrapper className={className}>
      <StaticImage
        src="../../assets/head-shot.jpg"
        alt="head shot"
        className={darkTheme ? 'dark' : 'light'}
        width={275}
        quality={100}
      />
      <MessageMe href="#">Message Me</MessageMe>
      <Socials>
        <FaLinkedinIn />
        <FaGithub />
      </Socials>
    </Wrapper>
  );
};

export default Headshot;
