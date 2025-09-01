// src/components/ProtectedRoute/ProtectedRoute.jsx
import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext'; // Import your real AuthContext hook

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated } = useAuth();
  const location = useLocation();

  if (!isAuthenticated) {
    // If the user is not authenticated, redirect them to the login page.
    // We also pass the current location in state so we can redirect them back
    // to the page they were trying to access after they log in.
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  // If the user is authenticated, render the child component (e.g., CartPage, CheckoutPage).
  return children;
};

export default ProtectedRoute;