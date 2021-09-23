import React from 'react';
import { ArrowDownCircle } from 'react-feather';

// Components
import Header from '../../theme/Header/Header';

// Styles
import {
  Wrapper,
  Middle,
  Text,
  Bottom,
  P,
  MagicHeadshot,
  Span,
  Fancy,
} from './About.styles';

/**********************************************
 * - About.js -
 * Component which all the about me details.
 *********************************************/
const About = () => {
  return (
    <Wrapper>
      <div></div>
      <Middle>
        <Text>
          <Header text='.about' />
          <P>
            A <Span>developer</Span> and <Fancy>(on occasion)</Fancy>{' '}
            <Span>designer</Span> passionate about simplifying development
            workflows. You can usually find me busy refactoring something.
          </P>
          <P>
            Currently working at <Span>TD Securities</Span> as a{' '}
            <Span>Technical Lead</Span> developing tools to simplify the
            creation of new web apps.
          </P>
        </Text>
        <MagicHeadshot />
      </Middle>
      <Bottom>
        <ArrowDownCircle />
      </Bottom>
    </Wrapper>
  );
};

export default About;
