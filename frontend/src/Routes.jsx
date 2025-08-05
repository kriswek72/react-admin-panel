import { BrowserRouter as Routes, Route } from 'react-router-dom';
import './App.css';
import Users from './pages/Users';
import Roles from './pages/Roles';
import Statistics from './modules/StatisticsModule';
import ProtectedRoute from './components/ProtectedRoute';
import NotAuthorized from './pages/NotAuthorized';
import { Navigate } from 'react-router-dom';


const routes = [
  {
    path: '/',
    element: (
      <ProtectedRoute permission="dashboard">
        <div>Dashboard</div>
      </ProtectedRoute>
    ),
  },
  {
    path: 'manage-modules',
    element: (
      <ProtectedRoute permission="manage-modules">
        <div>Manage Modules</div>
      </ProtectedRoute>
    ),
  },
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
  {
    path: '/content',
    element: (
      <ProtectedRoute permission="content">
        <div>Content Module</div>
      </ProtectedRoute>
    ),
  },
  {
    path: '/hr',
    element: (
      <ProtectedRoute permission="hr">
        <div>HR Module</div>
      </ProtectedRoute>
    ),
  },
  {
    path: '/NotAuthorized',
    element: <NotAuthorized />,
  },
  {
    path: '*',
    element: <Navigate to="/NotAuthorized" />,
  },
  {
    path: '/permissions',
    element: (
      <ProtectedRoute permission="permissions">
        <div>Permissions Module</div>
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

function App() {
  return (
    <div className="App">
      <Routes>
        {routes.map(({ path, element }, index) => (
          <Route key={index} path={path} element={element} />
        ))}
        {adminRoutes.map(({ path, element }, index) => (
          <Route key={`admin-${index}`} path={path} element={element} />
        ))}
      </Routes>
    </div>
  );
}
export default App;