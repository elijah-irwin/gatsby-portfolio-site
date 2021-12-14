import React from 'react';

// Components
import DesktopNav from './DesktopNav/DesktopNav';
import MobileNav from './MobileNav/MobileNav';

/**************************************************
 * - Navbar.js -
 * Displays either the desktop or mobile nav
 * depending on the current inner html width.
 *************************************************/
const Navbar = () => {
  return (
    <>
      <DesktopNav />
      <MobileNav />
    </>
  );
};

export default Navbar;
