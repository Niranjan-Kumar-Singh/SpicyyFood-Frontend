import React, { createContext, useContext, useState, useEffect } from 'react';
import * as authConstants from '../constants/authConstants'; // Importing constants

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  // Load user data from localStorage on component mount
  useEffect(() => {
    try {
      const storedUser = localStorage.getItem('user');
      if (storedUser) {
        setUser(JSON.parse(storedUser));
      }
    } catch (error) {
      console.error("Failed to load user from localStorage", error);
    }
  }, []);

  // Handle user login and store data in localStorage
  const handleLogin = (userData) => {
    setUser(userData);
    try {
      localStorage.setItem('user', JSON.stringify(userData)); // Save user to localStorage
      localStorage.setItem('token', userData.token); // Store token separately if needed
      console.log(authConstants.LOGIN_SUCCESS); // Action dispatch placeholder
    } catch (error) {
      console.error("Error saving user to localStorage", error);
      console.log(authConstants.LOGIN_FAIL); // Action dispatch placeholder
    }
  };

  // Handle user logout and remove user data from localStorage
  const handleLogout = () => {
    setUser(null);
    try {
      localStorage.removeItem('user');
      localStorage.removeItem('token');
      console.log(authConstants.LOGOUT); // Action dispatch placeholder
    } catch (error) {
      console.error("Error removing user from localStorage", error);
    }
  };

  // Handle user profile updates and persist the updated user data
  const handleUpdateUser = (updatedUserData) => {
    setUser(updatedUserData);
    try {
      localStorage.setItem('user', JSON.stringify(updatedUserData));
    } catch (error) {
      console.error("Error saving updated user to localStorage", error);
    }
  };

  return (
    <UserContext.Provider value={{ user, setUser, handleLogin, handleLogout, handleUpdateUser }}>
      {children}
    </UserContext.Provider>
  );
};

// Hook for easier use of UserContext
export const useUser = () => {
  return useContext(UserContext);
};
