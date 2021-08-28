import styled, { keyframes } from 'styled-components';
import { breaks } from '../../theme/breakPoints';

// Components
import Headshot from '../../components/Headshot/Headshot';

export const Wrapper = styled.div`
  display: grid;
  align-items: center;

  @media ${breaks.tablet} {
    min-height: 100vh;
  }

  @media ${breaks.laptop} {
    grid-template-columns: 1.5fr 1fr;
    gap: 20px;
  }
`;

export const Header = styled.h2`
  font-size: 4rem;
  font-weight: 600;
  letter-spacing: 1px;
  margin-bottom: 10px;
  color: ${props => props.theme.text.header};
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
  color: ${props => props.theme.text.accent};
  position: absolute;
  bottom: 40px;
  left: 50%;
  animation: ${bounce} 2s ease-in-out infinite;

  & svg {
    height: 40px;
    width: 40px;
  }

  @media ${breaks.tablet} {
    left: 52%;
  }
`;
