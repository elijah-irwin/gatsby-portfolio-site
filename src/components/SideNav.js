import React from 'react';
import styled from 'styled-components';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';



const SideNav = () => {
  return (
    <Nav>
      <Mak>mak</Mak>
      <Links>
        <li>.about</li>
        <li>.work</li>
        <li>.writing</li>
        <li>.contact</li>
      </Links>
      <Socials>
        <FaLinkedinIn />
        <FaGithub />
      </Socials>
    </Nav>
  );
};

export default SideNav;

const Nav = styled.nav`
  color: whitesmoke;
  position: fixed;
  height: 100vh;
  width: 10rem;
  display: grid;
  grid-template-rows: 1fr 1fr 1fr;
  background-color: ${props => props.theme.sidenav.bgColor};
`;

const Mak = styled.div`
  font-size: 2rem;
  font-weight: 700;
  letter-spacing: 1px;
  padding-top: 20px;
  width: 100%;
  text-align: center;
`;

const Links = styled.ul`
  font-size: 1.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  & li {
    margin: 5px;
  }
`;

const Socials = styled.div`
  font-size: 1rem;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  padding-bottom: 30px;

  & svg {
    height: 25px;
    width: 25px;

    &:first-child {
      margin-right: 20px;
    }
  }
`;
