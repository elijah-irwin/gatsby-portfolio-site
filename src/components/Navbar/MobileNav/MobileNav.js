import React, { useState, useContext } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import { AnchorLink } from 'gatsby-plugin-anchor-links';
import { DarkModeSwitch } from 'react-toggle-dark-mode';

// Components
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

  const menuHandler = () => {
    document.body.classList.toggle('fixedBody');
    setOpen(prev => !prev);
  };

  return (
    <>
      <Nav>
        <NavItems>
          <Menu onClick={menuHandler}>
            <FiMenu />
          </Menu>
          <Mak>mak</Mak>
          <ThemeToggle onClick={toggleTheme}>
            <DarkModeSwitch
              checked={darkTheme}
              onChange={toggleTheme}
              size={28}
              sunColor='#373737'
            />
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
            <li>
              <AnchorLink
                to='/#about'
                title='.about'
                stripHash
                onAnchorLinkClick={menuHandler}
              />
            </li>
            <li>
              <AnchorLink
                to='/#work'
                title='.work'
                stripHash
                onAnchorLinkClick={menuHandler}
              />
            </li>
            <li>
              <AnchorLink
                to='/#contact'
                title='.contact'
                stripHash
                onAnchorLinkClick={menuHandler}
              />
            </li>
            <li>
              <AnchorLink
                to='/resume/'
                title='.resume'
                stripHash
                onAnchorLinkClick={menuHandler}
              />
            </li>
          </ul>
          <Socials />
        </Items>
      </Drawer>
    </>
  );
};

export default MobileNav;
