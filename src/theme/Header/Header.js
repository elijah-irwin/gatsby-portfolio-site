import React from 'react';
import styled from 'styled-components';

const Styles = styled.h2`
  font-size: 3.3rem;
  font-weight: 600;
  letter-spacing: 1px;
  margin-bottom: 10px;
  color: ${props => props.theme.text.header};
`;

const Header = ({ text }) => <Styles>{text}</Styles>;
export default Header;
