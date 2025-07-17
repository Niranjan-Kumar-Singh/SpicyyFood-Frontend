import React, { createContext, useContext, useState, useEffect } from 'react';
import * as authConstants from '../constants/authConstants'; // Importing constants

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true); // ✅ Add loading state

  // Load user data from localStorage on component mount
  useEffect(() => {
    try {
      const storedUser = localStorage.getItem('user');
      if (storedUser) {
        setUser(JSON.parse(storedUser));
      }
    } catch (error) {
      console.error("Failed to load user from localStorage", error);
    } finally {
      setLoading(false); // ✅ Done loading
    }
  }, []);

  const handleLogin = (userData) => {
  try {
    setUser(userData); // ✅ Set full user object
    localStorage.setItem('user', JSON.stringify(userData)); // ✅ Save user info
    localStorage.setItem('token', userData.token); // Optional if you're using token elsewhere
    console.log(authConstants.LOGIN_SUCCESS);
  } catch (error) {
    console.error("Error saving user to localStorage", error);
    console.log(authConstants.LOGIN_FAIL);
  }
};

  const handleLogout = () => {
    setUser(null);
    try {
      localStorage.removeItem('user');
      localStorage.removeItem('token');
      console.log(authConstants.LOGOUT);
    } catch (error) {
      console.error("Error removing user from localStorage", error);
    }
  };

  const handleUpdateUser = (updatedUserData) => {
    setUser(updatedUserData);
    try {
      localStorage.setItem('user', JSON.stringify(updatedUserData));
    } catch (error) {
      console.error("Error saving updated user to localStorage", error);
    }
  };

  return (
    <UserContext.Provider
      value={{ user, setUser, loading, handleLogin, handleLogout, handleUpdateUser }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
