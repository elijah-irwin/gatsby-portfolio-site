import React from 'react';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { FiMenu, FiToggleLeft, FiToggleRight, FiX } from 'react-icons/fi';

// Contexts
import { AppContext } from '../../contexts/AppContext';

// Styles
import { sizeNumber } from '../../theme/breakPoints';
import {
  Nav,
  MobileNav,
  Menu,
  Mak,
  MakMobile,
  Links,
  NavItems,
  Socials,
  ThemeToggle,
} from './Navbar.styles';

// Hooks
import { usePageWidth } from '../../hooks/usePageWidth';

/**************************************************
 * - Navbar.js -
 * Side bar used for navigation.
 *************************************************/
const Navbar = () => {
  const { darkTheme, toggleTheme } = React.useContext(AppContext);

  const pageWidth = usePageWidth();

  if (pageWidth < sizeNumber.tablet) {
    return (
      <MobileNav>
        <NavItems>
          <Menu>
            <FiMenu />
          </Menu>
          <MakMobile>mak</MakMobile>
          <ThemeToggle onClick={toggleTheme}>
            {darkTheme ? <FiToggleRight /> : <FiToggleLeft />}
          </ThemeToggle>
        </NavItems>
      </MobileNav>
    );
  }

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

export default Navbar;
