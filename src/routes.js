import Users from './pages/Users';
import Roles from './pages/Roles';
import Statistics from './modules/StatisticsModule';
import ProtectedRoute from './components/ProtectedRoute';

const routes = [
  {
    path: '/users',
    element: (
      <ProtectedRoute permission="users">
        <Users />
      </ProtectedRoute>
    ),
  },
  {
    path: '/stats',
    element: (
      <ProtectedRoute permission="stats">
        <Statistics />
      </ProtectedRoute>
    ),
  },
];
const adminRoutes = [
  {
    path: '/roles',
    element: (
      <ProtectedRoute permission="roles">
        <Roles />
      </ProtectedRoute>
    ),
  },
];