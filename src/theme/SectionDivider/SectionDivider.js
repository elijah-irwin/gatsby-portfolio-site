import React from 'react';
import styled from 'styled-components';
import { breaks } from '../breakPoints';

const Line = styled.div`
  height: 2px;
  width: 100%;
  background-color: ${p => p.theme.color1};
  margin-top: 50px;
  margin-bottom: 30px;

  @media ${breaks.tablet} {
    display: none;
  }
`;

const SectionDivider = ({ ...rest }) => {
  return <Line {...rest}></Line>;
};

export default SectionDivider;
