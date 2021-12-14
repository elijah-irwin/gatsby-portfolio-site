import React from 'react';

// Context
import { AppProvider } from './src/contexts/AppContext';

// Using Gatby's wrapRootElement to apply this context to the root of the application.
export const wrapRootElement = ({ element }) => (
  <AppProvider>{element}</AppProvider>
);
