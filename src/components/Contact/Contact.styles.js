import styled from 'styled-components';

export const Wrapper = styled.div`
  padding-top: 100px;
  padding-bottom: 200px;
`;

export const P = styled.p`
  font-size: 1.7rem;
  font-weight: 300;
  max-width: 55%;
  margin: 50px 0px;
`;

export const Options = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 50px;
  flex-wrap: wrap;
`;

export const ContactHeader = styled.div`
  color: ${props => props.theme.text.header};
  margin-bottom: 10px;
  font-size: 1.4rem;
`;

export const Item = styled.a`
  text-decoration: none;
  color: ${p => p.theme.color1};
  font-size: 2rem;
  font-weight: bold;
  padding-bottom: 5px;
  position: relative;
  cursor: pointer;

  &:after {
    background: none repeat scroll 0 0 transparent;
    bottom: 0;
    content: '';
    display: block;
    height: 2px;
    left: 50%;
    position: absolute;
    background: ${p => p.theme.color1};
    transition: width 0.3s ease 0s, left 0.3s ease 0s;
    width: 0;
  }

  &:hover:after {
    width: 100%;
    left: 0;
  }
`;

export const WebIcons = styled.div`
  display: flex;
  gap: 20px;
`;

export const Icon = styled.a`
  display: flex;
  align-items: center;
  cursor: pointer;

  & svg {
    color: ${p => p.theme.color1};
    height: 30px;
    width: 30px;
  }
`;
