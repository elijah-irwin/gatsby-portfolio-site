import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { ToggleLeft, ToggleRight } from 'react-feather';

// Styles
import { GlobalStyles } from '../theme/globalStyles';
import { dark, light } from '../theme/themes';

// Components
import SideNav from './SideNav';

// State
import { AppContext } from '../contexts/AppContext';

const Layout = ({ children }) => {
  const { darkTheme, toggleTheme } = React.useContext(AppContext);

  // Render
  return (
    <ThemeProvider theme={darkTheme ? dark : light}>
      <GlobalStyles />

      <SideNav />

      <Body>
        <Toggle onClick={toggleTheme}>{darkTheme ? <ToggleRight /> : <ToggleLeft />}</Toggle>
        {children}
      </Body>
    </ThemeProvider>
  );
};

export default Layout;

const Body = styled.main`
  margin-left: 10rem;
  padding: 0px 200px;
  background-color: ${props => props.theme.main.bgColor};
`;

const Toggle = styled.div`
  position: absolute;
  top: 20px;
  right: 35px;
  color: ${props => props.theme.color1};

  & svg { 
    width: 50px; 
    height: 50px;
  }
`;