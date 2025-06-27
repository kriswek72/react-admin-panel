import React from 'react';
import { Navigate } from 'react-router-dom';
import { roles, currentUser } from '../utils/auth';

const ProtectedRoute = ({ permission, children }) => {
  const canAccess = roles[currentUser.role]?.includes(permission);
  return canAccess ? children : <Navigate to="/unauthorized" />;
};

export default ProtectedRoute;
