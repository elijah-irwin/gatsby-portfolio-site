import styled from 'styled-components';
import { breaks } from '../../theme/breakPoints';

export const Body = styled.main`
  padding: 0px 20px;

  @media ${breaks.tablet} {
    margin-left: 10rem;
    padding: 0px 75px;
  }

  @media ${breaks.laptopL} {
    padding: 0 300px;
  }
`;

export const ThemeToggle = styled.div`
  display: none;
  cursor: pointer;

  @media ${breaks.tablet} {
    display: block;
    position: fixed;
    top: 20px;
    right: 30px;
    color: ${props => props.theme.color1};

    & svg {
      width: 40px;
      height: 40px;
    }
  }
`;
