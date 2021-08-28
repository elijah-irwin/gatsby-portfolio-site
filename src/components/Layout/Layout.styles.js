import styled from 'styled-components';
import { breaks } from '../../theme/breakPoints';

export const Body = styled.main`
  background-color: ${props => props.theme.main.bgColor};
  padding: 0px 20px;

  @media ${breaks.tablet} {
    margin-left: 10rem;
    padding: 0px 75px;
  }

  @media ${breaks.laptopL} {
    padding: 0 200px;
  }
`;

export const ThemeToggle = styled.div`
  display: none;

  @media ${breaks.tablet} {
    display: block;
    position: absolute;
    top: 15px;
    right: 25px;
    color: ${props => props.theme.color1};

    & svg {
      width: 40px;
      height: 40px;
    }
  }
`;
