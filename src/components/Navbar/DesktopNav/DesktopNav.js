import React from 'react';

// Components
import Socials from '../../../theme/Socials/Socials';

// Styles
import { Nav, Mak, Links, Bottom } from './DesktopNav.styles';

const DesktopNav = () => (
  <Nav>
    <Mak>mak</Mak>
    <Links>
      <li>.about</li>
      <li>.work</li>
      <li>.tools</li>
      <li>.contact</li>
    </Links>
    <Bottom>
      <Socials />
    </Bottom>
  </Nav>
);

export default DesktopNav;
