import React, { useContext } from 'react';
import { StaticImage } from 'gatsby-plugin-image';

// Contexts
import { AppContext } from '../../contexts/AppContext';

// Components
import Socials from '../../theme/Socials/Socials';
import BigButton from '../../theme/BigButton/BigButton';

// Styles
import './Headshot.css';
import { Wrapper } from './Headshot.styles';

const Headshot = ({ className }) => {
  const { darkTheme } = useContext(AppContext);

  return (
    <Wrapper className={className}>
      <StaticImage
        src='../../assets/head-shot.jpg'
        alt='head shot'
        className={darkTheme ? 'dark' : 'light'}
        width={270}
        quality={100}
      />
      <BigButton>Message Me</BigButton>
      <Socials dark />
    </Wrapper>
  );
};

export default Headshot;
