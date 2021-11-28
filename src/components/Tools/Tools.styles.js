import styled from 'styled-components';
import { breaks } from '../../theme/breakPoints';

export const Wrapper = styled.div`
  padding-top: 10px;

  @media ${breaks.tablet} {
    padding-top: 150px;
  }
`;

export const Inline = styled.div`
  margin-top: 50px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 80px;
`;

export const LinkWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 50px;
`;
