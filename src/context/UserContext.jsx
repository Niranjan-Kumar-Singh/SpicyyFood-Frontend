import React, { createContext, useContext, useState, useEffect } from 'react';
import * as authConstants from '../constants/authConstants'; // Assuming constants are imported correctly

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
    } catch (error) {
      console.error("Error saving user to localStorage", error);
    }
    // Optionally dispatch LOGIN_SUCCESS here if you want to use constants
  };

  // Handle user logout and remove user data from localStorage
  const handleLogout = () => {
    setUser(null);
    try {
      localStorage.removeItem('user');
      localStorage.removeItem('token');
    } catch (error) {
      console.error("Error removing user from localStorage", error);
    }
    // Optionally dispatch LOGOUT action here if you use action types
  };

  // Handle user profile updates and persist the updated user data
  const handleUpdateUser = (updatedUserData) => {
    setUser(updatedUserData); // Update global state with new user data
    try {
      localStorage.setItem('user', JSON.stringify(updatedUserData)); // Persist updated user data in localStorage
    } catch (error) {
      console.error("Error saving updated user to localStorage", error);
    }
    // Optionally dispatch an action for user update
  };

  return (
    <UserContext.Provider value={{ user, setUser, handleLogin, handleLogout, handleUpdateUser }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  return useContext(UserContext);
};
