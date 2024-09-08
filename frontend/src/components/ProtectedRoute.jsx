// src/components/ProtectedRoute.js

import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem('token'); // Check for JWT in localStorage
  if (!token) {
    return <Navigate to="/login" />; // Redirect to login page if no token is found
  }
  return children; // Render the children (protected component) if token exists
};

export default ProtectedRoute;
