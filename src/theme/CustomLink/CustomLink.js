import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

const Styles = styled(Link)`
  color: ${props => props.theme.text.accent};
  padding: 0px 5px 5px;
  font-weight: 600;
  position: relative;

  &:after {
    background: none repeat scroll 0 0 transparent;
    bottom: 0;
    content: '';
    display: block;
    height: 2px;
    left: 0%;
    position: absolute;
    background: ${p => p.theme.color1};
    transition: width 0.3s ease 0s, left 0.3s ease 0s;
    width: 0;
  }

  &:hover:after {
    width: 100%;
    left: 0;
  }
`;

const CustomLink = ({ to, children }) => <Styles to={to}>{children}</Styles>;

export default CustomLink;
