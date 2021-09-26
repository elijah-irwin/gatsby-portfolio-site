import styled, { keyframes } from 'styled-components';
import { breaks } from '../../theme/breakPoints';

// Components
import Headshot from '../../components/Headshot/Headshot';

export const Wrapper = styled.div`
  display: grid;
  align-items: center;

  @media ${breaks.tablet} {
    height: 100vh;
    max-height: 100vh;
    grid-template-rows: 1fr 5fr 1fr;
  }
`;

export const Middle = styled.div`
  display: grid;

  @media ${breaks.laptop} {
    grid-template-columns: 1.5fr 1fr;
    gap: 20px;
  }
`;

export const Text = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const MagicHeadshot = styled(Headshot)`
  display: none;

  @media ${breaks.laptop} {
    display: flex;
  }
`;

export const P = styled.p`
  font-size: 1.7rem;
  margin-bottom: 20px;
  font-weight: 300;
`;

export const Span = styled.span`
  color: ${props => props.theme.text.accent};
`;

export const Fancy = styled.span`
  font-family: 'Caveat', cursive;
  font-weight: 100;
`;

const bounce = keyframes`
  0% { transform: translateY(0px); }
  50% { transform: translateY(-8px); }
  100% { transform: translateY(0px); }
`;

export const Bottom = styled.div`
  display: none;

  @media ${breaks.tablet} {
    display: flex;
    align-items: center;
    justify-content: center;
    animation: ${bounce} 2s ease-in-out infinite;

    & a {
      color: ${props => props.theme.text.accent};
    }

    & svg {
      height: 40px;
      width: 40px;
      cursor: pointer;
    }
  }
`;
