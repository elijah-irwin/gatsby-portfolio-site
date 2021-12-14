import styled from 'styled-components';
import { breaks } from '../../theme/breakPoints';

export const Wrap = styled.div`
  margin-top: 30px;
  margin-bottom: 30px;

  @media ${breaks.mobileL} {
    margin-top: 60px;
    margin-bottom: 60px;
  }
`;

export const Grid = styled.div`
  display: grid;
  gap: 25px 25px;
  grid-template-columns: 2.5fr 1fr;
  font-size: 1.7rem;

  @media ${breaks.mobileL} {
    grid-template-columns: 1fr 3fr 2fr 1fr;
  }

  @media ${breaks.laptop} {
    gap: 25px 25px;
    grid-template-columns: 1fr 3fr 2fr 5fr 1fr;
  }

  & div {
    white-space: nowrap;
  }
`;

export const Header = styled.div`
  font-weight: 600;
`;

export const MobileHeader = styled.div`
  display: none;

  @media ${breaks.mobileL} {
    font-weight: 600;
    display: block;
  }
`;

export const LaptopHeader = styled.div`
  display: none;

  @media ${breaks.laptop} {
    font-weight: 600;
    display: block;
  }
`;

export const Year = styled.div`
  display: none;

  @media ${breaks.mobileL} {
    color: ${p => p.theme.color1};
    font-size: 1.3rem;
    font-family: 'Roboto Mono', sans-serif;
    display: block;
  }
`;

export const Name = styled.div`
  color: ${p => p.theme.projectTable.name};
  font-size: 1.3rem;
  font-weight: 600;
`;

export const MadeAt = styled.div`
  display: none;

  @media ${breaks.mobileL} {
    font-size: 1.2rem;
    display: block;
  }
`;

export const BuiltWith = styled.div`
  display: none;

  @media ${breaks.laptop} {
    font-size: 1rem;
    display: flex;
  }
`;

export const Tool = styled.div`
  &:after {
    font-size: 1.2rem;
    content: '·';
    margin: 6px;
    color: ${p => p.theme.color1};
  }

  &:last-child:after {
    content: '';
  }
`;

export const Links = styled.div`
  display: flex;

  & a {
    cursor: pointer;
    transition: 0.2s color ease-in;
    margin-right: 15px;
    color: ${p => p.theme.text.color};
    display: flex;
    align-items: center;

    &:hover {
      color: ${p => p.theme.color1};
    }
  }
`;
