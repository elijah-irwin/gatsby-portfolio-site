import styled from 'styled-components';
import { breaks } from '../../theme/breakPoints';

export const Wrapper = styled.div`
  padding-top: 100px;
  padding-bottom: 80px;

  @media ${breaks.tablet} {
    padding-top: 150px;
    padding-bottom: 200px;
  }
`;

export const Inline = styled.div`
  margin-top: 50px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 80px;
`;
