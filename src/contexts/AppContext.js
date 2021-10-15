import React from 'react';

// LocalStorage Keys
const themeKey = 'mak-theme';

// Initial App State
const init_state = {
  darkTheme: localStorage.getItem(themeKey)
    ? JSON.parse(localStorage.getItem(themeKey))
    : true,
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
    localStorage.setItem(themeKey, !state.darkTheme);
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
