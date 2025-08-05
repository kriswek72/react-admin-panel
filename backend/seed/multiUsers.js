import bcrypt from 'bcrypt';
import pool from '../db.js';

const users = [
  { username: 'admin', password: 'admin123', role: 'superadmin', permissions: ['dashboard', 'settings', 'users'] },
  { username: 'edytor', password: 'editor123', role: 'editor', permissions: ['invoices', 'reports'] },
  { username: 'podglądacz', password: 'viewer123', role: 'viewer', permissions: ['dashboard'] }
];

for (const u of users) {
  const hash = await bcrypt.hash(u.password, 10);
  await pool.query(
    `INSERT INTO users (username, password, role, permissions)
     VALUES ($1, $2, $3, $4) ON CONFLICT (username) DO NOTHING`,
    [u.username, hash, u.role, u.permissions]
  );
}

console.log('✅ Dodano użytkowników testowych');
process.exit(0);
// To run this script, use the command:
// node seed/multiUsers.js