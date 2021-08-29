import React from 'react';
import styled from 'styled-components';

// Styles
const Button = styled.a`
  margin: 30px;
  padding: 15px 40px;
  font-size: 1.6rem;
  font-weight: 600;
  white-space: nowrap;
  letter-spacing: 0.5px;
  border-radius: 50px;
  background-color: ${p => (p.light ? p.theme.white : p.theme.color1)};
  color: ${p => (p.light ? p.theme.color1 : p.theme.buttonText)};
  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.25);

  &:hover {
    transform: scale(1.02, 1.02);
  }
`;

/*****************************************
 * - BigButton.js -
 * Chonky button for actioning stuff.
 ****************************************/
const BigButton = ({ children, light, link = '#' }) => (
  <Button light={light} href={link}>
    {children}
  </Button>
);

export default BigButton;
