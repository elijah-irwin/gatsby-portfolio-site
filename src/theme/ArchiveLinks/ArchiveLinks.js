import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

const Wrap = styled.div`
  display: flex;
`;

const LinkWrap = styled.div`
  margin-right: 30px;
`;

const StyledLink = styled(Link)`
  color: ${props => props.theme.text.color};
  font-family: 'Caveat', cursive;
  font-weight: 100;
  font-size: 1.8rem;
  padding: 0px 5px 5px;
  font-weight: 600;
  position: relative;

  &.${p => p.activeClassName} {
    color: ${p => p.theme.color1};

    &:after {
      width: 100%;
      background: ${p => p.theme.color1};
    }
  }

  &:after {
    background: none repeat scroll 0 0 transparent;
    bottom: 0;
    content: '';
    display: block;
    height: 2px;
    left: 0%;
    position: absolute;
    background: ${p => p.theme.text.color};
    transition: width 0.3s ease 0s, left 0.3s ease 0s;
    width: 0;
  }

  &:hover:after {
    width: 100%;
    left: 0;
  }
`;

const ArchiveLinks = () => {
  return (
    <Wrap>
      <LinkWrap>
        <StyledLink to='/projects/' activeClassName='active'>
          projects
        </StyledLink>
      </LinkWrap>
      <LinkWrap>
        <StyledLink to='/resume/' activeClassName='active'>
          resume
        </StyledLink>
      </LinkWrap>
    </Wrap>
  );
};

export default ArchiveLinks;
