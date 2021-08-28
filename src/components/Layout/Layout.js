import React from 'react';
import { ThemeProvider } from 'styled-components';
import { FiToggleLeft, FiToggleRight } from 'react-icons/fi';

// Contexts
import { AppContext } from '../../contexts/AppContext';

// Components
import Navbar from '../Navbar/Navbar';

// Styles
import { GlobalStyles } from '../../theme/globalStyles';
import { dark, light } from '../../theme/themes';
import { Body, ThemeToggle } from './Layout.styles';

/**********************************************************
 * - Layout.js -
 * High level wrapping component which contains content
 * that is used on every page.
 *********************************************************/
const Layout = ({ children }) => {
  const { darkTheme, toggleTheme } = React.useContext(AppContext);

  return (
    <ThemeProvider theme={darkTheme ? dark : light}>
      <GlobalStyles />
      <Navbar />
      <ThemeToggle onClick={toggleTheme}>
        {darkTheme ? <FiToggleRight /> : <FiToggleLeft />}
      </ThemeToggle>
      <Body>{children}</Body>
    </ThemeProvider>
  );
};

export default Layout;
