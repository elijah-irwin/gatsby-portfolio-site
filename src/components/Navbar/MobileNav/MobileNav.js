import React, { useState, useContext } from 'react';
import { FiMenu, FiToggleLeft, FiToggleRight, FiX } from 'react-icons/fi';
import { AnchorLink } from 'gatsby-plugin-anchor-links';

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
                to='/#tools'
                title='.tools'
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
          </ul>
          <BigButton light>Message Me</BigButton>
          <Socials></Socials>
        </Items>
      </Drawer>
    </>
  );
};

export default MobileNav;
