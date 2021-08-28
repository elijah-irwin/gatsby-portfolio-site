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

export const MobileNav = styled.nav`
  position: sticky;
  top: 0;
  background-color: ${p => p.theme.main.bgColor};
  width: 100%;
`;

export const NavItems = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
`;

export const MakMobile = styled.div`
  color: ${p => p.theme.text.header};
  font-size: 1.8em;
  font-weight: 700;
  letter-spacing: 1px;
`;

export const ThemeToggle = styled.div`
  color: ${props => props.theme.color1};
  display: flex;
  align-items: center;

  & svg {
    width: 40px;
    height: 40px;
  }
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

export const Socials = styled.div`
  font-size: 1rem;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  padding-bottom: 30px;

  & svg {
    height: 25px;
    width: 25px;
    cursor: pointer;

    &:first-child {
      margin-right: 20px;
    }
  }
`;

export const Menu = styled.div`
  color: ${props => props.theme.color1};
  display: flex;
  align-items: center;

  & svg {
    width: 35px;
    height: 35px;
  }
`;
