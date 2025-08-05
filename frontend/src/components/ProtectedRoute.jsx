import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const ProtectedRoute = ({ permission, children }) => {
  const { user } = useAuth();

  if (!user || !user.username) {
    console.log('🔐 Brak sesji — przekierowanie do /login');
    return <Navigate to="/login" replace />;
  }

  // Jeśli nie podano permission — wpuszczamy zalogowanego
  if (!permission) return children;

  // Jeśli jest permission — sprawdzamy dostęp
  if (permission) {
  const hasPermission = user.permissions?.includes(permission);
  if (!hasPermission) {
    console.log(`🚫 Brak uprawnień do "${permission}" dla "${user.username}"`);
    return <Navigate to="/unauthorized" />;
  }
}


  console.log(`✅ Dostęp przyznany do "${permission}" dla "${user.username}"`);
  return children;
};

export default ProtectedRoute;
