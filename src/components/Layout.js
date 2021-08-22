import React from 'react';
import { ThemeProvider } from 'styled-components';

// Styles
import { GlobalStyles } from '../theme/globalStyles';
import { dark, light } from '../theme/themes';

// State
import { AppContext } from '../contexts/AppContext';

const Layout = ({ children }) => {
  const { darkTheme, toggleTheme } = React.useContext(AppContext);

  // Render
  return (
    <ThemeProvider theme={darkTheme ? dark : light}>
      <GlobalStyles />
      <button onClick={toggleTheme}>swap theme</button>
      {children}
    </ThemeProvider>
  );
};

export default Layout;
