import React from 'react';
import { Navigate } from 'react-router-dom';
import { useUser } from '../context/UserContext';

const ProtectedRoute = ({ children }) => {
  const { user, loading } = useUser();

  if (loading) {
    return <div style={{ textAlign: 'center', marginTop: '50px' }}>Checking login...</div>;
    // You can also use a spinner component here
  }

  return user ? children : <Navigate to="/login" replace />;
};

export default ProtectedRoute;
