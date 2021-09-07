import styled from 'styled-components';

export const Wrapper = styled.div`
  margin-top: 100px;
`;

const gap = '20px;';

export const Cards = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr;
  gap: ${gap};
`;

export const Row1 = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: ${gap};
`;

export const Row2 = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: ${gap};
`;

export const Archive = styled.div`
  text-align: center;
  color: ${props => props.theme.text.accent};
  margin: 30px 0;
`;
