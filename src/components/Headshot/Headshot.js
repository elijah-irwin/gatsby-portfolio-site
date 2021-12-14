import React, { useContext } from 'react';
import { StaticImage } from 'gatsby-plugin-image';

// Contexts
import { AppContext } from '../../contexts/AppContext';

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
        imgStyle={{ borderRadius: '50%' }}
        width={270}
        quality={100}
      />
    </Wrapper>
  );
};

export default Headshot;
