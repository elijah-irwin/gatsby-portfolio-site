import styled from 'styled-components';
import { breaks } from '../../theme/breakPoints';

export const Wrapper = styled.div`
  margin-top: 100px;
  margin-bottom: 100px;
`;

const gap = '20px;';

export const Cards = styled.div`
  display: grid;
  gap: ${gap};
  padding-top: 15px;
`;

export const Row1 = styled.div`
  display: grid;
  gap: ${gap};

  @media ${breaks.laptop} {
    grid-template-columns: 2fr 1fr;
  }
`;

export const Row2 = styled.div`
  display: grid;
  gap: ${gap};

  @media ${breaks.laptop} {
    grid-template-columns: 2fr 3fr;
  }
`;

export const Archive = styled.div`
  text-align: center;
  color: ${props => props.theme.text.accent};
  margin-top: 30px;
`;
