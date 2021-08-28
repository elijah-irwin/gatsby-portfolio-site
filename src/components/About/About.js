import React from 'react';

// Styles
import { Wrapper, Header, P, MagicHeadshot, Span, Fancy } from './About.styles';

/**********************************************
 * - About.js -
 * Component which all the about me details.
 *********************************************/
const About = () => {
  return (
    <Wrapper>
      <div>
        <Header>.about</Header>
        <P>
          A <Span>developer</Span> and <Fancy>(on occasion)</Fancy>{' '}
          <Span>designer</Span> passionate about simplifying development
          workflows. You can usually find me busy refactoring something.
        </P>
        <P>
          Currently working at <Span>TD Securities</Span> as a{' '}
          <Span>Technical Lead</Span> developing tools to simplify the creation
          of new apps.
        </P>
      </div>
      <MagicHeadshot />
    </Wrapper>
  );
};

export default About;
