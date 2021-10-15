import React from 'react';
import { ArrowDownCircle } from 'react-feather';
import { AnchorLink } from 'gatsby-plugin-anchor-links';

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
    <Wrapper id='about'>
      <div></div>
      <Middle>
        <Text>
          <Header text="Hello, I'm Mak." />
          <P>
            A <Span>developer</Span> and <Fancy>(on occasion)</Fancy>{' '}
            <Span>designer</Span> passionate about simplifying development
            workflows.
          </P>
          <P>
            Currently working at <Span>TD Securities</Span> as a{' '}
            <Span>Technical Lead</Span> producing tools to streamline the
            creation of new web apps.
          </P>
        </Text>
        <MagicHeadshot />
      </Middle>
      <Bottom>
        <AnchorLink to='/#work'>
          <ArrowDownCircle />
        </AnchorLink>
      </Bottom>
    </Wrapper>
  );
};

export default About;
