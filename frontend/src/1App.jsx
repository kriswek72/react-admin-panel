// frontend/src/App.jsx

import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useAuth } from './context/AuthContext';
import ProtectedRoute from './components/ProtectedRoute';
import MainLayout from './components/MainLayout';
import UserProfile from './components/UserProfile';

// Strony i moduły
import Home from './pages/Home';
import Login from './pages/Login';
import Unauthorized from './pages/Unauthorized';
import NotFound from './pages/NotFound';
import Modules from './pages/Modules';
import Users from './pages/Users';
import Roles from './pages/Roles';
import Statistics from './pages/Statistics';
import Invoices from './pages/Invoices';
import Dashboard from './pages/Dashboard';
import Settings from './pages/Settings';
import Reports from './pages/Reports';
import Finance from './pages/Finance';
import MyAccount from './pages/MyAccount';
import Permissions from './pages/Permissions';

import InvoicesModule from './modules/InvoicesModule';
import ReportsModule from './modules/ReportsModule';
import FinanceModule from './modules/FinanceModule';
import HRModule from './modules/HRModule';
import ProjectsModule from './modules/ProjectsModule';
import ContentModule from './modules/ContentModule';
import UsersModule from './modules/UsersModule';
import HomeModule from './modules/HomeModule';
import RolesModule from './modules/RolesModule';
import StatisticsModule from './modules/StatisticsModule';
import ManageModules from './modules/ManageModules';
//import PermissionsModule from './modules/PermissionsModule';



// Konfiguracja modułów
const modulesConfig = [
  { name: 'Strona główna', path: '/', permission: 'home', component: 'HomeModule', icon: '🏠' },
  { name: 'Fakturowanie', path: '/invoices', permission: 'invoices', component: 'InvoicesModule', icon: '🧾' },
];

const moduleMap = {
  Modules,
  HomeModule,
  ManageModules,
  ContentModule,
  FinanceModule,
  HRModule,
  ProjectsModule,
  Permissions,
  InvoicesModule,
  ReportsModule,
  RolesModule,
  UsersModule,
  StatisticsModule,
  Home,
  Users,
  Roles,
  Statistics,
  Invoices,
  Dashboard,
  Settings,
  Reports,
  Finance,
  MyAccount,
  Unauthorized,
  Login,
  NotFound,
  UserProfile,
};

export default function App() {
  const { loading, user } = useAuth();
  const location = useLocation();

  if (loading) {
    return <div style={{ padding: '2rem' }}>⏳ Sprawdzam sesję...</div>;
  }

  // Pozwalamy tylko na login/unauthorized, gdy user === null
  if (!user && !['/login', '/unauthorized'].includes(location.pathname)) {
    return <Routes><Route path="*" element={<Login />} /></Routes>;
  }

  return (
    <Routes>
      {/* Publiczne trasy */}
      <Route path="/login" element={<Login />} />
      <Route path="/unauthorized" element={<Unauthorized />} />
      <Route path="/register" element={<div>Register Page</div>} />
      <Route path="/forgot-password" element={<div>Forgot Password Page</div>} />
      <Route path="/reset-password" element={<div>Reset Password Page</div>} />

      {/* Statyczne chronione */}
        <Route path="/my-account" element={
        <ProtectedRoute>
          <MainLayout>
            <MyAccount />
          </MainLayout>
        </ProtectedRoute>
      } />
      <Route path="/" element={
        <ProtectedRoute permission="home">
          <MainLayout><Home /></MainLayout>
        </ProtectedRoute>
      } />
      <Route path="/home" element={
        <ProtectedRoute permission="home">
          <MainLayout><Home /></MainLayout>
        </ProtectedRoute>
      } />
      <Route path="/home-module" element={
        <ProtectedRoute permission="home">
          <MainLayout><HomeModule /></MainLayout>
        </ProtectedRoute>
      } />
      <Route path="/roles-module" element={
        <ProtectedRoute permission="roles">
          <MainLayout><RolesModule /></MainLayout>
        </ProtectedRoute>
      } />
      <Route path="/user-profile" element={
        <ProtectedRoute permission="users">
          <MainLayout><UserProfile /></MainLayout>
        </ProtectedRoute>
      } />
      <Route path="/manage-modules" element={
        <ProtectedRoute permission="manage-modules">
          <MainLayout><ManageModules /></MainLayout>
        </ProtectedRoute>
      } />
      <Route path="/modules" element={
        <ProtectedRoute permission="modules">
          <MainLayout><Modules /></MainLayout>
        </ProtectedRoute>
      } />
      <Route path="/dashboard" element={
        <ProtectedRoute permission="dashboard">
          <MainLayout><Dashboard /></MainLayout>
        </ProtectedRoute>
      } />
      <Route path="/finance" element={
        <ProtectedRoute permission="finance">
          <MainLayout><FinanceModule /></MainLayout>
        </ProtectedRoute>
      } />
      <Route path="/hr" element={
        <ProtectedRoute permission="hr">
          <MainLayout><HRModule /></MainLayout>
        </ProtectedRoute>
      } />
      <Route path="/invoices" element={
        <ProtectedRoute permission="invoices">
          <MainLayout><InvoicesModule /></MainLayout>
        </ProtectedRoute>
      } />
      <Route path="/reports" element={
        <ProtectedRoute permission="reports">
          <MainLayout><ReportsModule /></MainLayout>
        </ProtectedRoute>
      } />
      <Route path="/settings" element={
        <ProtectedRoute permission="settings">
          <MainLayout><Settings /></MainLayout>
        </ProtectedRoute>
      } />
      <Route path="/profile" element={
        <ProtectedRoute permission="profile">
          <MainLayout><div>Profile Page</div></MainLayout>
        </ProtectedRoute>
      } />
      <Route path="/permissions" element={
        <ProtectedRoute permission="permissions">
          <MainLayout><Permissions /></MainLayout>
        </ProtectedRoute>
      } />
      <Route path="/content" element={
        <ProtectedRoute permission="content">
          <MainLayout><ContentModule /></MainLayout>
        </ProtectedRoute>
      } />
      <Route path="/projects" element={
        <ProtectedRoute permission="projects">
          <MainLayout><ProjectsModule /></MainLayout>
        </ProtectedRoute>
      } />
      <Route path="/users-module" element={
        <ProtectedRoute permission="users">
          <MainLayout><UsersModule /></MainLayout>
        </ProtectedRoute>
      } />      
      {/* Przykładowe trasy */}
      <Route path="/users" element={
        <ProtectedRoute permission="users">
          <MainLayout><Users /></MainLayout>
        </ProtectedRoute>
      } />
      <Route path="/roles" element={
        <ProtectedRoute permission="roles">
          <MainLayout><Roles /></MainLayout>
        </ProtectedRoute>
      } />
      <Route path="/statistics" element={
        <ProtectedRoute permission="statistics">
          <MainLayout><Statistics /></MainLayout>
        </ProtectedRoute>
      } />

      {/* Dynamiczne z `modulesConfig` */}
      {modulesConfig.map(({ path, permission, component }, index) => {
        const ModuleComponent = moduleMap[component];
        if (!ModuleComponent) return null;

        return (
          <Route
            key={index}
            path={path}
            element={
              <ProtectedRoute permission={permission}>
                <MainLayout>
                  <ModuleComponent />
                </MainLayout>
              </ProtectedRoute>
            }
          />
        );
      })}

      {/* Fallbacki */}
      <Route path="*" element={
        <MainLayout>
          <NotFound />
        </MainLayout>
      } />
    </Routes>
  );
}
// To jest główny plik aplikacji, który definiuje wszystkie trasy i moduły.
// Używamy `ProtectedRoute` do zabezpieczenia tras, które wymagają uprawnień.
// Moduły są dynamicznie ładowane na podstawie konfiguracji `modulesConfig`.
// Każdy moduł jest renderowany w `MainLayout`, co zapewnia spójny wygląd aplikacji.
// W przypadku braku sesji użytkownika, przekierowujemy go na stronę logowania.
// Jeśli użytkownik nie ma uprawnień do danej trasy, zostanie przekierowany na stronę "Unauthorized".