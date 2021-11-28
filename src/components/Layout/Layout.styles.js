import styled from 'styled-components';
import { breaks } from '../../theme/breakPoints';

export const Body = styled.main`
  padding: 0px 20px;

  @media ${breaks.tablet} {
    margin-left: 9rem;
    padding: 0px 100px;
  }

  @media ${breaks.laptopL} {
    padding: 0px 350px;
  }
`;

export const ThemeToggle = styled.div`
  display: none;

  @media ${breaks.tablet} {
    display: block;
    position: fixed;
    top: 20px;
    right: 25px;
  }
`;
