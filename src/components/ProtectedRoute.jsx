// src/components/ProtectedRoute.jsx
import React from 'react';
import { Navigate } from 'react-router-dom';
import { useUser } from '../context/UserContext'; // Or import from Redux if moved

const ProtectedRoute = ({ children }) => {
  const { user } = useUser();
  return user ? children : <Navigate to="/login" />;
};

export default ProtectedRoute;
