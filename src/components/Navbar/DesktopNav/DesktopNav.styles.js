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
`;

export const Links = styled.ul`
  font-size: 1.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  & li {
    margin: 5px;
  }
`;

export const Bottom = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: center;
  padding-bottom: 30px;
`;
