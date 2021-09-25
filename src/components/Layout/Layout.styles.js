import styled from 'styled-components';
import { breaks } from '../../theme/breakPoints';

export const Body = styled.main`
  padding: 0px 20px;

  @media ${breaks.tablet} {
    margin-left: 10rem;
    padding: 0px 100px;
  }

  @media ${breaks.laptopL} {
    padding: 0px 300px;
  }
`;

export const ThemeToggle = styled.div`
  display: none;
  cursor: pointer;

  @media ${breaks.tablet} {
    display: block;
    position: fixed;
    top: 10px;
    right: 17px;
    color: ${props => props.theme.color1};

    & svg {
      width: 40px;
      height: 40px;
    }
  }
`;
