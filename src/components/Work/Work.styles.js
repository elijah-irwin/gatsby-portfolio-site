import styled from 'styled-components';
import { breaks } from '../../theme/breakPoints';

const gap = '20px;';

export const Wrapper = styled.div`
  padding-top: 100px;
`;

export const ViewAllCard = styled.div`
  min-height: 250px;
  border-radius: 10px;
  width: 100%;
  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.25);
  background-color: ${p => p.theme.resume.card};
  background-size: cover;
  padding: 40px;
  color: ${p => p.theme.white};
  display: grid;
  grid-template-columns: 1fr 1fr;
  cursor: pointer;

  &:hover {
    svg {
      transform: scale(1.05);
    }
  }
`;

export const Icon = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  gap: 10px;

  svg {
    transition: 0.1s ease-in all;
    height: 100px;
    width: 100px;
    color: ${p => p.theme.color1};
  }
`;

export const Top = styled.div`
  display: flex;
  margin-bottom: 20px;
  align-items: center;

  font-weight: 600;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  color: ${p => p.theme.text.header};
`;

export const Name = styled.div`
  font-size: 3rem;
  font-weight: 600;
  color: ${p => p.theme.text.header};
`;

export const Cards = styled.div`
  display: grid;
  gap: ${gap};
  padding-top: 15px;
`;

export const Row1 = styled.div`
  display: grid;
  gap: ${gap};

  @media ${breaks.laptop} {
    grid-template-columns: 3fr 2fr;
  }
`;

export const Row2 = styled.div`
  display: grid;
  gap: ${gap};

  @media ${breaks.laptop} {
    grid-template-columns: 2fr 3fr;
  }
`;
