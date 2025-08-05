import pkg from 'pg';
import bcrypt from 'bcrypt';

const { Pool } = pkg;
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'react_admin_panel',
  password: 'Tytus@147852',
  port: 5432,
});

const users = [
  {
    username: 'krzysztof',
    password: 'admin123',
    role: 'superadmin',
    permissions: [
      'home', 'content', 'users', 'roles','dashboard', 'invoices', 'finance', 'reports', 'settings', 
      'superadmin', 'modules', 'permissions', 'profile', 'statistics', 'projects', 'hr', 'manage-modules', 'my-account',
      'ContentModule',
      'FinanceModule',
      'HomeModule',
      'HRModule',
      'InvoicesModule',
      'ManageModules',
      'PermissionModule',
      'ProjectsModule',
      'ReportsModule',
      'RolesModule',
      'StatisticsModule',
      'SettingsModule',
      'UsersModule',
      'Dashboard',
      'Finance',
      'Home',
      'HR',
      'Invoices',
      'Modules',
      'MyAccount',
      'Permissions',
      'Projects',
      'Reports',
      'Roles',
      'Settings',
      'Statistics',
      'Users'
    ],
    firstName: 'Krzysztof',
  },
  {
    username: 'edytor',
    password: 'editor123',
    role: 'editor',
    permissions: ['home','invoices', 'reports'],
    firstName: 'Edyta',
  },
  {
    username: 'podglądacz',
    password: 'viewer123',
    role: 'podglądacz',
    permissions: ['home', 'dashboard'],
    firstName: 'Podglądacz',
  },
];

(async () => {
  for (const user of users) {
    const hashed = await bcrypt.hash(user.password, 10);

    await pool.query(
      `
      INSERT INTO users (username, password, role, permissions, first_name)
      VALUES (
        $1,
        $2,
        $3,
        $4,
        pgp_sym_encrypt($5, 'krzysio-klucz-supersekretny')
      )
      ON CONFLICT (username) DO UPDATE SET
        password = EXCLUDED.password,
        role = EXCLUDED.role,
        permissions = EXCLUDED.permissions,
        first_name = EXCLUDED.first_name
      `,
      [user.username, hashed, user.role, user.permissions, user.firstName]
    );

    console.log(`✔️ Zapisano użytkownika: ${user.username}`);
  }

  await pool.end();
})();
// To run this script, use the command:
// node db/seed.js
// Make sure to have the PostgreSQL server running and the database created
// with the correct schema before executing this script.