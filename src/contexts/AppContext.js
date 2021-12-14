import React from 'react';

// LocalStorage Keys
const themeKey = 'mak-theme';

// Helper browser fnc.
const isBrowser = () => typeof window !== 'undefined';

// Initial App State
const init_state = () => {
  const state = { darkTheme: false };

  if (!isBrowser()) return state;

  const theme = JSON.parse(localStorage.getItem(themeKey) || 'false');
  state.darkTheme = theme;
  return state;
};

// Create the context and export AppContext for consumption by other components.
export const AppContext = React.createContext(init_state);

// AppProvider: Wrapper component which manages the app's state.
// Consumed by gatsby-browser.js.
export const AppProvider = ({ children }) => {
  // Context state.
  const [state, setState] = React.useState(init_state);

  // Helper fnc to update the state while retaining old values.
  const updateState = arg => setState({ ...state, ...arg });

  // Fnc to toggle the theme.
  const toggleTheme = () => {
    if (isBrowser()) localStorage.setItem(themeKey, !state.darkTheme);
    updateState({ darkTheme: !state.darkTheme });
  };

  // State and fncs accessible by components consuming this context.
  const value = {
    ...state,
    toggleTheme,
  };

  // Render
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
