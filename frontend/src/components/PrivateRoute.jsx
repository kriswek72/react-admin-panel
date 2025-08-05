// src/components/PrivateRoute.jsx
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const PrivateRoute = ({ children, allowedRoles }) => {
  const { user, loading } = useAuth();
  const location = useLocation();

  if (loading) return null; // lub spinner, jeśli chcesz

  if (!user) {
    localStorage.setItem('lastVisited', location.pathname);
    return <Navigate to="/login" />;
  }
  if (user.role === 'superadmin') return children; // Superadmin ma dostęp do wszystkiego
  if (allowedRoles && !allowedRoles.includes(user.role)) {
    return <Navigate to="/unauthorized" replace />;
  }

  return children;
};

export default PrivateRoute;
