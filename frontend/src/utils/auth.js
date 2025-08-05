// frontend/src/utils/auth.js
export const roles = {
  superadmin: [
    'content',    
    'dashboard',
    'finance',
    'home',
    'hr',
    'invoices',
    'manage-modules',
    'modules',
    'my-account',
    'permissions',
    'profile',
    'projects',
    'roles',
    'settings',
    'statistics',
    'stats',
    'superadmin',
    'users',
  ],
  editor: ['home', 'users', 'stats'],
  podglądacz: ['home'],
};
export const hasPermission = (user, permission) => {
  return roles[user.role]?.includes(permission);
};