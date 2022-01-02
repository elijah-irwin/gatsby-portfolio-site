import React from 'react';
import { AnchorLink } from 'gatsby-plugin-anchor-links';

// Components
import Socials from '../../../theme/Socials/Socials';

// Styles
import { Nav, Mak, Links, Bottom } from './DesktopNav.styles';

const DesktopNav = () => (
  <Nav>
    <Mak>
      <AnchorLink to='/#about' title='mak' />
    </Mak>
    <Links>
      <li>
        <AnchorLink to='/#about' title='.about' stripHash />
      </li>
      <li>
        <AnchorLink to='/#work' title='.work' stripHash />
      </li>
      <li>
        <AnchorLink to='/#skills' title='.skills' stripHash />
      </li>
      <li>
        <AnchorLink to='/#contact' title='.contact' stripHash />
      </li>
      <li>
        <AnchorLink to='/resume/' title='.resume' stripHash />
      </li>
    </Links>
    <Bottom>
      <Socials />
    </Bottom>
  </Nav>
);

export default DesktopNav;
