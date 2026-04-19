import React, { createContext, useState } from 'react';

// Create the context
const HomeContext = createContext();

// Create and export the provider
export const HomeContextProvider = ({ children }) => {
  const [active, setActive] = useState(2);
  const [errorMessage, setErrorMessage] = useState(null);

  // Toggle between light and dark themes

  return (
    <HomeContext.Provider
      value={{ active, setActive, errorMessage, setErrorMessage }}
    >
      {children}
    </HomeContext.Provider>
  );
};

// Export the context object for consumers
export default HomeContext;
