import React, { useState, useMemo, useContext } from 'react';

// Create a store context
const StoreContext = React.createContext();

export function StoreProvider({ children, initialState = [] }) {
  const [store, setStore] = useState(() => initialState);

  const contextValue = useMemo(() => [store, setStore], [store]);

  return (
    <StoreContext.Provider value={contextValue}>
      {children}
    </StoreContext.Provider>
  );
}

export default function useStore() {
  return useContext(StoreContext);
}
