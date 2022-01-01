import styled from 'styled-components';
import { breaks } from '../../theme/breakPoints';
import { Link } from 'gatsby';

export const Wrapper = styled.div`
  padding-top: 10px;

  @media ${breaks.tablet} {
    padding-top: 150px;
  }
`;

export const Inline = styled.div`
  margin-top: 50px;
  margin-bottom: 60px;
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

export const ResumeBtn = styled(Link)`
  width: fit-content;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  color: ${p => p.theme.white};
  padding: 8px 15px;
  border-radius: 10px;
  background-color: ${p => p.theme.color1};
  text-transform: lowercase;
  font-weight: 600;
  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.2);

  &:hover {
    transform: translateY(-1px);
  }
`;
