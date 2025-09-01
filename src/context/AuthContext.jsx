// src/context/AuthContext.jsx
import React, { createContext, useState, useContext } from 'react';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  // We'll use sessionStorage so the user stays logged in until the browser tab is closed.
  const [isAuthenticated, setIsAuthenticated] = useState(!!sessionStorage.getItem('tbsUser'));

  const login = () => {
    sessionStorage.setItem('tbsUser', 'true');
    setIsAuthenticated(true);
  };

  const logout = () => {
    sessionStorage.removeItem('tbsUser');
    setIsAuthenticated(false);
  };

  const value = { isAuthenticated, login, logout };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};