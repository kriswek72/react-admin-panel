// src/config/modulesConfig.js
export const modulesConfig = [
  {
    name: 'Zarządzanie treścią',
    path: '/content',
    permission: 'content',
    component: 'ContentModule',
    icon: '📝',
  },
  {
    name: 'Finanse',
    path: '/finance',
    permission: 'finance',
    component: 'FinanceModule',
    icon: '💰',
  },
  {
    name: 'Strona główna',
    path: '/',
    permission: 'home',
    component: 'HomeModule',
    icon: '🏠',
  },
  {
    name: 'HR',
    path: '/hr',
    permission: 'hr',
    component: 'HRModule',
    icon: '👥',
  },
  {
    name: 'Fakturowanie',
    path: '/invoices',
    permission: 'invoices',
    icon: '🧾',
    component: 'InvoicesModule',
  },
  {
    name: 'Zarządzanie modułami',
    path: '/modules',
    permission: 'modules',
    component: 'ManageModules',
    icon: '📦',
  },
  {
    name: 'Uprawnienia',
    path: '/permissions',
    permission: 'permissions',
    component: 'PermissionsModule',
    icon: '📝',
  },
  {
    name: 'Projekty',
    path: '/projects',
    permission: 'projects',
    component: 'ProjectsModule',
    icon: '📁',
  },
  {
    name: 'Raporty',
    path: '/reports',
    permission: 'reports',
    component: 'ReportsModule',
    icon: '📊',
  },
  {
    name: 'Role',
    path: '/roles',
    permission: 'roles',
    component: 'RolesModule',
    icon: '👥',
  },
  {
    name: 'Statystyki',
    path: '/statistics',
    permission: 'statistics',
    component: 'StatisticsModule',
    icon: '📊',
  },
  {
    name: 'Ustawienia',
    path: '/settings',
    permission: 'settings',
    component: 'SettingsModule',
    icon: '⚙️',
  },
  {
    name: 'Zarządzanie użytkownikami',
    path: '/users',
    permission: 'users',
    component: 'UsersModule',
    icon: '👤',
  },
  {
  name: 'Moje konto',
  path: '/my-account',
  permission: 'my-account',
  component: 'MyAccount',
  icon: '👤'
  },
];

// Ten plik konfiguracyjny definiuje moduły dostępne w panelu administracyjnym.
// Każdy moduł ma nazwę, ścieżkę, uprawnienia wymagane do uzyskania do niego dostępu, komponent do renderowania,
// i opcjonalną ikonę do wyświetlenia na pasku bocznym.
// Możesz dodać lub usunąć moduły, zmieniając tę tablicę.
// Moduły są używane do dynamicznego generowania nawigacji i renderowania odpowiednich komponentów w aplikacji.
// Upewnij się, że każdy komponent jest poprawnie zaimportowany w pliku App.jsx lub innym miejscu, gdzie są używane.
// Możesz również dodać dodatkowe właściwości do modułów, jeśli potrzebujesz więcej informacji lub konfiguracji dla każdego modułu.
// Przykład użycia:
// import { modulesConfig } from './config/modulesConfig';  
// const accessibleModules = modulesConfig.filter(module => user.permissions.includes(module.permission));
// accessibleModules będzie zawierać tylko te moduły, do których użytkownik ma dostęp na podstawie swoich uprawnień.
export default modulesConfig;