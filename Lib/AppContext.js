import React, { createContext, useReducer, useContext } from 'react';

// Create a context with an initial state and a dispatch function
const AppContext = createContext();

// Define a reducer function to handle state changes
const reducer = (state, action) => {
  switch (action.type) {
    case 'UPDATE_DATA':
      return { ...state, data: action.payload };
    // Add more cases as needed
    default:
      return state;
  }
};

// Create a provider component that wraps your entire application
export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, { data: null });

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

// Create a custom hook to access the context
export const useAppContext = () => {
  return useContext(AppContext);
};
