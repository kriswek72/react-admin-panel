import pool from '../db.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { encrypt, decrypt } from '../utils/cryptoUtils.js';


const encryptedFirstName = encrypt('Krzysztof');
console.log('Zaszyfrowane imię:', encryptedFirstName);
const decryptedFirstName = decrypt(encryptedFirstName); // do odczytu
console.log('Odszyfrowane imię:', decryptedFirstName);
// Używamy zmiennej środowiskowej do przechowywania tajnego klucza JWT
// Upewnij się, że masz plik .env z ustawioną zmienną JWT_SECRET
// Przykład: JWT_SECRET=mysecretkey

const JWT_SECRET = process.env.JWT_SECRET;
// Jeśli nie masz pliku .env, możesz ustawić zmienną środowiskową w systemie lub w pliku konfiguracyjnym
// Pamiętaj, że klucz JWT powinien być tajny i nie powinien być udostępniany publicznie,
// dlatego najlepiej jest przechowywać go w pliku .env lub jako zmienną środowiskową.

export const login = async (req, res) => {
  const { username, password } = req.body;
    if (!username || !password) {
        return res.status(400).json({ error: '⛔ Proszę podać nazwę użytkownika i hasło' });
    }

  try {
    const query = 'SELECT * FROM users WHERE username = $1';
    const result = await pool.query(query, [username]);

    if (result.rows.length === 0) {
      return res.status(401).json({ error: 'Użytkownik nie istnieje' });
    }

    const user = result.rows[0];

    // ✅ Porównujemy zahashowane hasło
    const match = await bcrypt.compare(password, user.password);
    if (!match) {
      return res.status(401).json({ error: '⛔ Nieprawidłowe hasło' });
    }

    // 🔐 Tworzymy token JWT
    const token = jwt.sign(
      {
        id: user.id,
        username: user.username,
        role: user.role,
        permissions: user.permissions
      },
      JWT_SECRET,
      { expiresIn: '2h' }
    );

    res.json({
      token,
      user: {
        id: user.id,
        username: user.username,
        role: user.role,
        permissions: user.permissions
      }
    });

  } catch (err) {
    console.error(err);
    res.status(500).json({ error: '❌ Błąd serwera' });
  }
};
export const register = async (req, res) => {
  const { username, password, role } = req.body;

  try {
    // Sprawdzamy, czy użytkownik już istnieje
    const query = 'SELECT * FROM users WHERE username = $1';
    const result = await pool.query(query, [username]);

    if (result.rows.length > 0) {
      return res.status(400).json({ error: '✅ Użytkownik już istnieje' });
    }

    // Hashujemy hasło
    const hashedPassword = await bcrypt.hash(password, 10);

    // Dodajemy nowego użytkownika
    const insertQuery = `
      INSERT INTO users (username, password, role)
      VALUES ($1, $2, $3)
      RETURNING id, username, role
    `;
    const insertResult = await pool.query(insertQuery, [username, hashedPassword, role]);

    const newUser = insertResult.rows[0];

    res.status(201).json({
      message: '✅ Użytkownik zarejestrowany pomyślnie',
      user: newUser
    });

  } catch (err) {
    console.error(err);
    res.status(500).json({ error: '❌ Błąd serwera' });
  }
};

export const logout = (req, res) => {
  // W przypadku JWT nie ma potrzeby "wylogowania" — wystarczy usunąć token po stronie klienta
  res.json({ message: '✅ Wylogowano pomyślnie' });
};

export const getUser = async (req, res) => {
  const { id } = req.params;

  try {
    const query = 'SELECT * FROM users WHERE id = $1';
    const result = await pool.query(query, [id]);

    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'Użytkownik nie znaleziony' });
    }

    const user = result.rows[0];
    res.json({
      id: user.id,
      username: user.username,
      role: user.role,
      permissions: user.permissions,
      firstName: decrypt(user.first_name) // Odszyfrowujemy imię
    });

  } catch (err) {
    console.error(err);
    res.status(500).json({ error: '❌ Błąd serwera' });
  }
};

export const updateUser = async (req, res) => {
  const { id } = req.params;
  const { username, password, role, permissions } = req.body;

  try {
    // Sprawdzamy, czy użytkownik istnieje
    const query = 'SELECT * FROM users WHERE id = $1';
    const result = await pool.query(query, [id]);

    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'Użytkownik nie znaleziony' });
    }

    // Hashujemy nowe hasło, jeśli jest podane
    let hashedPassword;
    if (password) {
      hashedPassword = await bcrypt.hash(password, 10);
    }

    // Aktualizujemy dane użytkownika
    const updateQuery = `
      UPDATE users
      SET username = $1,
          password = COALESCE($2, password),
          role = $3,
          permissions = $4
      WHERE id = $5
      RETURNING id, username, role, permissions
    `;
    const updateResult = await pool.query(updateQuery, [
      username,
      hashedPassword,
      role,
      permissions,
      id
    ]);

    const updatedUser = updateResult.rows[0];

    res.json({
      message: '✅ Użytkownik zaktualizowany pomyślnie',
      user: updatedUser
    });

  } catch (err) {
    console.error(err);
    res.status(500).json({ error: '❌ Błąd serwera' });
  }
};

export const deleteUser = async (req, res) => {
  const { id } = req.params;

  try {
    // Sprawdzamy, czy użytkownik istnieje
    const query = 'SELECT * FROM users WHERE id = $1';
    const result = await pool.query(query, [id]);

    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'Użytkownik nie znaleziony' });
    }

    // Usuwamy użytkownika
    const deleteQuery = 'DELETE FROM users WHERE id = $1 RETURNING id';
    const deleteResult = await pool.query(deleteQuery, [id]);

    if (deleteResult.rows.length === 0) {
      return res.status(500).json({ error: '❌ Błąd podczas usuwania użytkownika' });
    }

    res.json({ message: '✅ Użytkownik usunięty pomyślnie', userId: id });

  } catch (err) {
    console.error(err);
    res.status(500).json({ error: '❌ Błąd serwera' });
  }
};

export const getAllUsers = async (req, res) => {
  try {
    const query = 'SELECT id, username, role, permissions FROM users';
    const result = await pool.query(query);

    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: '❌ Błąd serwera' });
  }
};

export const getUserProfile = async (req, res) => {
  const userId = req.user.id; // Pobieramy ID użytkownika z tokena JWT

  try {
    const query = 'SELECT id, username, role, permissions FROM users WHERE id = $1';
    const result = await pool.query(query, [userId]);

    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'Użytkownik nie znaleziony' });
    }

    const user = result.rows[0];
    res.json(user);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: '❌ Błąd serwera' });
  }
};

export const updateUserProfile = async (req, res) => {
  const userId = req.user.id; // Pobieramy ID użytkownika z tokena JWT
  const { username, password } = req.body;

  try {
    // Hashujemy nowe hasło, jeśli jest podane
    let hashedPassword;
    if (password) {
      hashedPassword = await bcrypt.hash(password, 10);
    }

    // Aktualizujemy dane użytkownika
    const updateQuery = `
      UPDATE users
      SET username = $1,
          password = COALESCE($2, password)
      WHERE id = $3
      RETURNING id, username, role, permissions
    `;
    const updateResult = await pool.query(updateQuery, [
      username,
      hashedPassword,
      userId
    ]);

    if (updateResult.rows.length === 0) {
      return res.status(404).json({ error: 'Użytkownik nie znaleziony' });
    }

    const updatedUser = updateResult.rows[0];
    res.json({
      message: '✅ Profil zaktualizowany pomyślnie',
      user: updatedUser
    });

  } catch (err) {
    console.error(err);
    res.status(500).json({ error: '❌ Błąd serwera' });
  }
};

export const deleteUserProfile = async (req, res) => {
  const userId = req.user.id; // Pobieramy ID użytkownika z tokena JWT

  try {
    // Usuwamy użytkownika
    const deleteQuery = 'DELETE FROM users WHERE id = $1 RETURNING id';
    const deleteResult = await pool.query(deleteQuery, [userId]);

    if (deleteResult.rows.length === 0) {
      return res.status(404).json({ error: 'Użytkownik nie znaleziony' });
    }

    res.json({ message: '✅ Profil usunięty pomyślnie', userId });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: '❌ Błąd serwera' });
  }
};

export const getUserPermissions = async (req, res) => {
  const userId = req.user.id; // Pobieramy ID użytkownika z tokena JWT

  try {
    const query = 'SELECT permissions FROM users WHERE id = $1';
    const result = await pool.query(query, [userId]);

    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'Użytkownik nie znaleziony' });
    }

    const user = result.rows[0];
    res.json({ permissions: user.permissions });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: '❌ Błąd serwera' });
  }
};

export const updateUserPermissions = async (req, res) => {
  const userId = req.user.id; // Pobieramy ID użytkownika z tokena JWT
  const { permissions } = req.body;

  try {
    // Aktualizujemy uprawnienia użytkownika
    const updateQuery = `
      UPDATE users
      SET permissions = $1
      WHERE id = $2
      RETURNING id, username, role, permissions
    `;
    const updateResult = await pool.query(updateQuery, [permissions, userId]);

    if (updateResult.rows.length === 0) {
      return res.status(404).json({ error: 'Użytkownik nie znaleziony' });
    }

    const updatedUser = updateResult.rows[0];
    res.json({
      message: '✅ Uprawnienia zaktualizowane pomyślnie',
      user: updatedUser
    });

  } catch (err) {
    console.error(err);
    res.status(500).json({ error: '❌ Błąd serwera' });
  }
};

export const getUserActivityLogs = async (req, res) => {
  const userId = req.user.id; // Pobieramy ID użytkownika z tokena JWT

  try {
    const query = 'SELECT * FROM user_activity_logs WHERE user_id = $1 ORDER BY timestamp DESC';
    const result = await pool.query(query, [userId]);

    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: '❌ Błąd serwera' });
  }
};

export const getAdminActivityLogs = async (req, res) => {
  const userId = req.user.id; // Pobieramy ID użytkownika z tokena JWT

  try {
    const query = 'SELECT * FROM admin_activity_logs WHERE user_id = $1 ORDER BY timestamp DESC';
    const result = await pool.query(query, [userId]);

    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: '❌ Błąd serwera' });
  }
};

export const getActivityLogs = async (req, res) => {
  try {
    const query = 'SELECT * FROM activity_logs ORDER BY timestamp DESC';
    const result = await pool.query(query);

    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: '❌ Błąd serwera' });
  }
};
export const logUserActivity = (action) => async (req, res, next) => {
  const userId = req.user.id; // Pobieramy ID użytkownika z tokena JWT
  try {
    await pool.query(
      'INSERT INTO user_activity_logs (user_id, action) VALUES ($1, $2)',
      [userId, action]
    );
  } catch (err) {
    console.error('❌ Błąd podczas logowania aktywności użytkownika:', err);
  }
  next();
};

export const logAdminActivity = (action) => async (req, res, next) => {
  const userId = req.user.id; // Pobieramy ID użytkownika z tokena JWT
  try {
    await pool.query(
      'INSERT INTO admin_activity_logs (user_id, action) VALUES ($1, $2)',
      [userId, action]
    );
  } catch (err) {
    console.error('❌ Błąd podczas logowania aktywności administratora:', err);
  }
  next();
};
export const logActivity = (action) => async (req, res, next) => {
  const userId = req.user.id; // Pobieramy ID użytkownika z tokena JWT
  try {
    await pool.query(
      'INSERT INTO activity_logs (user_id, action) VALUES ($1, $2)',
      [userId, action]
    );
  } catch (err) {
    console.error('❌ Błąd podczas logowania aktywności:', err);
  }
  next();
};
export const getUserByUsername = async (req, res) => {
  const { username } = req.params;

  try {
    const query = 'SELECT * FROM users WHERE username = $1';
    const result = await pool.query(query, [username]);

    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'Użytkownik nie znaleziony' });
    }

    res.json(result.rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: '❌ Błąd serwera' });
  }
};
