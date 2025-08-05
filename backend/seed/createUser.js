// Uruchamiasz: node seed/createUser.js

import bcrypt from 'bcrypt';
import pool from '../db.js';

const createUser = async () => {
  const username = 'admin';
  const rawPassword = 'admin123';
  const role = 'superadmin';
  const permissions = [
    'dashboard', 'invoices', 'finance', 'reports', 'settings', 'superadmin'
  ];

  try {
    const hashedPassword = await bcrypt.hash(rawPassword, 10);

    const insertQuery = `
      INSERT INTO users (username, password, role, permissions)
      VALUES ($1, $2, $3, $4)
      ON CONFLICT (username) DO NOTHING
    `;

    await pool.query(insertQuery, [username, hashedPassword, role, permissions]);

    console.log('✅ Użytkownik "admin" został utworzony!');
    process.exit(0);
  } catch (err) {
    console.error('❌ Błąd podczas tworzenia użytkownika:', err);
    process.exit(1);
  }
};

createUser();
// Do uruchomienia tego skryptu, użyj polecenia:
// node seed/createUser.js