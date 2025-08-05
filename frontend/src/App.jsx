// frontend/src/App.jsx

import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useAuth } from './context/AuthContext';
import ProtectedRoute from './components/ProtectedRoute';
import MainLayout from './components/MainLayout';

// Komponenty
import Login from './pages/Login';
import Unauthorized from './pages/Unauthorized';
import NotFound from './pages/NotFound';
import UserProfile from './components/UserProfile';

// Moduły i strony
import modulesConfig from './config/modulesConfig';

// Import komponentów dynamicznych
import ContentModule from './modules/ContentModule';
import FinanceModule from './modules/FinanceModule';
import HomeModule from './modules/HomeModule';
import HRModule from './modules/HRModule';
import InvoicesModule from './modules/InvoicesModule';
import ManageModules from './modules/ManageModules';
import PermissionModule from './modules/PermissionModule';
import ProjectsModule from './modules/ProjectsModule';
import ReportsModule from './modules/ReportsModule';
import RolesModule from './modules/RolesModule';
import StatisticsModule from './modules/StatisticsModule';
import SettingsModule from './modules/SettingsModule';
import UsersModule from './modules/UsersModule';


import Dashboard from './pages/Dashboard';
import Finance from './pages/Finance';
import Home from './pages/Home';
import HR from './pages/HR';
import Invoices from './pages/Invoices';
import Modules from './pages/Modules';
import MyAccount from './pages/MyAccount';
import Permissions from './pages/Permissions';
import Projects from './pages/Projects';
import Reports from './pages/Reports';
import Roles from './pages/Roles';
import Settings from './pages/Settings';
import Statistics from './pages/Statistics';
import Users from './pages/Users';

const moduleMap = {
  ContentModule,
  FinanceModule,
  HomeModule,
  HRModule,
  InvoicesModule,
  ManageModules,
  PermissionModule,
  ProjectsModule,
  ReportsModule,
  RolesModule,
  StatisticsModule,
  SettingsModule,
  UsersModule,
  Dashboard,
  Finance,
  Home,
  HR,
  Invoices,
  Modules,
  MyAccount,
  Permissions,
  Projects,
  Reports,
  Roles,
  Settings,
  Statistics,
  Users
};

export default function App() {
  const { loading, user } = useAuth();
  const location = useLocation();

  if (loading) {
    return <div style={{ padding: '2rem' }}>⏳ Sprawdzam sesję...</div>;
  }

  if (!user && !['/login', '/unauthorized'].includes(location.pathname)) {
    return <Routes><Route path="*" element={<Login />} /></Routes>;
  }

  return (
    <Routes>
      {/* Publiczne */}
      <Route path="/login" element={<Login />} />
      <Route path="/unauthorized" element={<Unauthorized />} />
      <Route path="/not-found" element={<NotFound />} />
      <Route path="/forbidden" element={<MainLayout><div>🔒 Brak dostępu</div></MainLayout>} />
      <Route path="/error" element={<MainLayout><div>❗ Coś poszło nie tak</div></MainLayout>} />

      {/* Statyczne trasy chronione */}
      <Route path="/content" element={
        <ProtectedRoute permission="content">
          <MainLayout><ContentModule /></MainLayout>
        </ProtectedRoute>
      } />
      <Route path="/finance" element={
        <ProtectedRoute permission="finance">
          <MainLayout><FinanceModule /></MainLayout>
        </ProtectedRoute>
      } />
      <Route path="/home" element={
        <ProtectedRoute permission="home">
          <MainLayout><HomeModule /></MainLayout>
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
      <Route path="/modules" element={
        <ProtectedRoute permission="modules">
          <MainLayout><ManageModules /></MainLayout>
        </ProtectedRoute>
      } />
      <Route path="/permissions" element={
        <ProtectedRoute permission="permissions">
          <MainLayout><PermissionModule /></MainLayout>
        </ProtectedRoute>
      } />
      <Route path="/projects" element={
        <ProtectedRoute permission="projects">
          <MainLayout><ProjectsModule /></MainLayout>
        </ProtectedRoute>
      } />
      <Route path="/reports" element={
        <ProtectedRoute permission="reports">
          <MainLayout><ReportsModule /></MainLayout>
        </ProtectedRoute>
      } />
      <Route path="/roles" element={
        <ProtectedRoute permission="roles">
          <MainLayout><RolesModule /></MainLayout>
        </ProtectedRoute>
      } />
      <Route path="/settings" element={
        <ProtectedRoute permission="settings">
          <MainLayout><SettingsModule /></MainLayout>
        </ProtectedRoute>
      } />
      <Route path="/statistics" element={
        <ProtectedRoute permission="statistics">
          <MainLayout><StatisticsModule /></MainLayout>
        </ProtectedRoute>
      } />
      <Route path="/users" element={
        <ProtectedRoute permission="users">
          <MainLayout><UsersModule /></MainLayout>
        </ProtectedRoute>
      } />
      <Route path="/dashboard" element={
        <ProtectedRoute permission="dashboard">
          <MainLayout><Dashboard /></MainLayout>
        </ProtectedRoute>
      } />
      <Route path="/finance-module" element={
        <ProtectedRoute permission="finance">
          <MainLayout><Finance /></MainLayout>
        </ProtectedRoute>
      } />
      <Route path="/hr-module" element={
        <ProtectedRoute permission="hr">
          <MainLayout><HR /></MainLayout>
        </ProtectedRoute>
      } />
      <Route path="/invoices-module" element={
        <ProtectedRoute permission="invoices">
          <MainLayout><Invoices /></MainLayout>
        </ProtectedRoute>
      } />
      <Route path="/modules-page" element={
        <ProtectedRoute permission="modules">
          <MainLayout><Modules /></MainLayout>
        </ProtectedRoute>
      } />
      <Route path="/my-account" element={
        <ProtectedRoute permission="my-account">
          <MainLayout><MyAccount /></MainLayout>
        </ProtectedRoute>
      } />
      <Route path="/permissions-page" element={
        <ProtectedRoute permission="permissions">
          <MainLayout><Permissions /></MainLayout>
        </ProtectedRoute>
      } />
      <Route path="/projects-page" element={
        <ProtectedRoute permission="projects">
          <MainLayout><Projects /></MainLayout>
        </ProtectedRoute>
      } />
      <Route path="/reports-page" element={
        <ProtectedRoute permission="reports">
          <MainLayout><Reports /></MainLayout>
        </ProtectedRoute>
      } />  
      <Route path="/roles-page" element={
        <ProtectedRoute permission="roles">
          <MainLayout><Roles /></MainLayout>
        </ProtectedRoute>
      } />
      <Route path="/settings-page" element={
        <ProtectedRoute permission="settings">
          <MainLayout><Settings /></MainLayout>
        </ProtectedRoute>
      } />
      <Route path="/statistics-page" element={
        <ProtectedRoute permission="statistics">
          <MainLayout><Statistics /></MainLayout>
        </ProtectedRoute>
      } />
      <Route path="/users-page" element={
        <ProtectedRoute permission="users">
          <MainLayout><Users /></MainLayout>
        </ProtectedRoute>
      } />
      <Route path="/dashboard-page" element={
        <ProtectedRoute permission="dashboard">
          <MainLayout><Dashboard /></MainLayout>
        </ProtectedRoute>
      } />
      <Route path="/profile" element={
        <ProtectedRoute permission="profile">
          <MainLayout><UserProfile /></MainLayout>
        </ProtectedRoute>
      } />

      {/* 🔁 Dynamiczne trasy z modulesConfig */}
      {modulesConfig.map(({ path, permission, component }, index) => {
        const ModuleComponent = moduleMap[component];
        if (!ModuleComponent) return null;
        if (permission && !user.permissions.includes(permission)) {
          return (
            <Route key={index} path={path} element={
              <ProtectedRoute permission={permission}>
                <MainLayout><Unauthorized /></MainLayout>
              </ProtectedRoute>
            } />
          );
        }

        return (
          <Route key={index} path={path} element={
            <ProtectedRoute permission={permission}>
              <MainLayout>
                <ModuleComponent />
              </MainLayout>
            </ProtectedRoute>
          } />
        );
      })}

      {/* Fallback */}
      <Route path="*" element={<MainLayout><NotFound /></MainLayout>} />
    </Routes>
  );
}

// To jest główny plik aplikacji, który definiuje wszystkie trasy i moduły.
// Używamy `ProtectedRoute` do zabezpieczenia tras, które wymagają uprawnień.
// Moduły są dynamicznie ładowane na podstawie konfiguracji `modulesConfig`.
// Każdy moduł jest renderowany w `MainLayout`, co zapewnia spójny wygląd aplikacji.
// W przypadku braku sesji użytkownika, przekierowujemy go na stronę logowania.
// Jeśli użytkownik nie ma uprawnień do danej trasy, zostanie przekierowany na stronę "Unauthorized".