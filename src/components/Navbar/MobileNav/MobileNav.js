import React, { useState, useContext } from 'react';
import { FiMenu, FiToggleLeft, FiToggleRight, FiX } from 'react-icons/fi';

// Components
import BigButton from '../../../theme/BigButton/BigButton';
import Socials from '../../../theme/Socials/Socials';

// Styles
import {
  Nav,
  NavItems,
  Menu,
  Mak,
  MakDrawer,
  ThemeToggle,
  Drawer,
  Top,
  Items,
} from './MobileNav.styles';

// Contexts
import { AppContext } from '../../../contexts/AppContext';

const MobileNav = () => {
  const [open, setOpen] = useState(false);
  const { darkTheme, toggleTheme } = useContext(AppContext);

  const menuHandler = () => setOpen(prev => !prev);

  return (
    <>
      <Nav>
        <NavItems>
          <Menu onClick={menuHandler}>
            <FiMenu />
          </Menu>
          <Mak>mak</Mak>
          <ThemeToggle onClick={toggleTheme}>
            {darkTheme ? <FiToggleRight /> : <FiToggleLeft />}
          </ThemeToggle>
        </NavItems>
      </Nav>
      <Drawer open={open}>
        <Top>
          <Menu close onClick={menuHandler}>
            <FiX />
          </Menu>
          <MakDrawer>mak</MakDrawer>
        </Top>
        <Items>
          <ul>
            <li>.about</li>
            <li>.work</li>
            <li>.writing</li>
            <li>.contact</li>
          </ul>
          <BigButton light>Message Me</BigButton>
          <Socials></Socials>
        </Items>
      </Drawer>
    </>
  );
};

export default MobileNav;
