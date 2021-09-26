import styled from 'styled-components';

export const Nav = styled.nav`
  color: ${p => p.theme.white};
  position: fixed;
  height: 100vh;
  width: 10rem;
  display: grid;
  grid-template-rows: 1fr 1fr 1fr;
  background-color: ${props => props.theme.sidenav.bgColor};
`;

export const Mak = styled.div`
  font-size: 2rem;
  font-weight: 700;
  letter-spacing: 1px;
  padding-top: 10px;
  width: 100%;
  text-align: center;

  & a {
    color: ${p => p.theme.white};
  }
`;

export const Links = styled.ul`
  font-size: 1.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  & li {
    margin: 10px;

    & a {
      color: ${p => p.theme.white};
      padding: 0px 5px 5px;
      font-weight: 500;
      position: relative;

      &:after {
        background: none repeat scroll 0 0 transparent;
        bottom: 0;
        content: '';
        display: block;
        height: 2px;
        left: 50%;
        position: absolute;
        background: ${p => p.theme.white};
        transition: width 0.3s ease 0s, left 0.3s ease 0s;
        width: 0;
      }

      &:hover:after {
        width: 100%;
        left: 0;
      }
    }
  }
`;

export const Bottom = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: center;
  padding-bottom: 30px;
`;
