import React from 'react';

// Components
import DesktopNav from './DesktopNav/DesktopNav';
import MobileNav from './MobileNav/MobileNav';

// Styles
import { sizeNumber } from '../../theme/breakPoints';

// Hooks
import { usePageWidth } from '../../hooks/usePageWidth';

/**************************************************
 * - Navbar.js -
 * Displays either the desktop or mobile nav
 * depending on the current inner html width.
 *************************************************/
const Navbar = () => {
  const pageWidth = usePageWidth();
  return pageWidth < sizeNumber.tablet ? <MobileNav /> : <DesktopNav />;
};

export default Navbar;
