import express from 'express';
import { login } from '../controllers/authController.js';
import { verifyToken } from '../middleware/verifyToken.js';

const router = express.Router();

router.post('/login', login);
router.get('/protected', verifyToken, (req, res) => {
  res.send('This is a protected route');
});
router.get('/me', verifyToken, (req, res) => {
  res.json(req.user); // z `verifyToken` (payload tokena)
});
// Endpoint do testowania CORS
router.get('/test-cors', (req, res) => {
  res.set('Access-Control-Allow-Origin', '*');
  res.set('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.set('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  res.json({ message: '✅ CORS działa poprawnie' });
});
// Endpoint do pobierania danych użytkownika
router.get('/user', verifyToken, async (req, res) => {
  const userId = req.user.id;

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
});
// Endpoint do pobierania wszystkich użytkowników
router.get('/users', verifyToken, async (req, res) => {
  try {
    const query = 'SELECT id, username, role, permissions FROM users';
    const result = await pool.query(query);

    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: '❌ Błąd serwera' });
  }
});
// Endpoint do pobierania użytkownika po ID
router.get('/users/:id', verifyToken, async (req, res) => {
  const userId = req.params.id;

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
});
// Endpoint do aktualizacji użytkownika
router.put('/users/:id', verifyToken, async (req, res) => {
  const userId = req.params.id;
  const { username, role, permissions } = req.body;

  try {
    // Sprawdzamy, czy użytkownik istnieje
    const query = 'SELECT * FROM users WHERE id = $1';
    const result = await pool.query(query, [userId]);

    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'Użytkownik nie znaleziony' });
    }

    // Aktualizujemy dane użytkownika
    const updateQuery = `
      UPDATE users
      SET username = $1,
          role = $2,
          permissions = $3
      WHERE id = $4
      RETURNING id, username, role, permissions
    `;
    const updateResult = await pool.query(updateQuery, [
      username,
      role,
      permissions,
      userId
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
});
// Endpoint do usuwania użytkownika
router.delete('/users/:id', verifyToken, async (req, res) => {
  const userId = req.params.id;

  try {
    // Sprawdzamy, czy użytkownik istnieje
    const query = 'SELECT * FROM users WHERE id = $1';
    const result = await pool.query(query, [userId]);

    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'Użytkownik nie znaleziony' });
    }

    // Usuwamy użytkownika
    const deleteQuery = 'DELETE FROM users WHERE id = $1 RETURNING id';
    const deleteResult = await pool.query(deleteQuery, [userId]);

    if (deleteResult.rows.length === 0) {
      return res.status(500).json({ error: '❌ Błąd podczas usuwania użytkownika' });
    }

    res.json({ message: '✅ Użytkownik usunięty pomyślnie', userId: userId });

  } catch (err) {
    console.error(err);
    res.status(500).json({ error: '❌ Błąd serwera' });
  }
});
import pool from '../db.js';  
// Endpoint do pobierania wszystkich ról
router.get('/roles', verifyToken, async (req, res) => {
  try {
    const query = 'SELECT * FROM roles';
    const result = await pool.query(query);

    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: '❌ Błąd serwera' });
  }
});
// Endpoint do pobierania roli po ID
router.get('/roles/:id', verifyToken, async (req, res) => {
  const roleId = req.params.id;

  try {
    const query = 'SELECT * FROM roles WHERE id = $1';
    const result = await pool.query(query, [roleId]);

    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'Rola nie znaleziona' });
    }

    const role = result.rows[0];
    res.json(role);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: '❌ Błąd serwera' });
  }
});
// Endpoint do aktualizacji roli
router.put('/roles/:id', verifyToken, async (req, res) => {
  const roleId = req.params.id;
  const { name, permissions } = req.body;

  try {
    // Sprawdzamy, czy rola istnieje
    const query = 'SELECT * FROM roles WHERE id = $1';
    const result = await pool.query(query, [roleId]);

    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'Rola nie znaleziona' });
    }

    // Aktualizujemy dane roli
    const updateQuery = `
      UPDATE roles
      SET name = $1,
          permissions = $2
      WHERE id = $3
      RETURNING id, name, permissions
    `;
    const updateResult = await pool.query(updateQuery, [
      name,
      permissions,
      roleId
    ]);

    const updatedRole = updateResult.rows[0];

    res.json({
      message: '✅ Rola zaktualizowana pomyślnie',
      role: updatedRole
    });

  } catch (err) {
    console.error(err);
    res.status(500).json({ error: '❌ Błąd serwera' });
  }
});
// Endpoint do usuwania roli
router.delete('/roles/:id', verifyToken, async (req, res) => {
  const roleId = req.params.id;

  try {
    // Sprawdzamy, czy rola istnieje
    const query = 'SELECT * FROM roles WHERE id = $1';
    const result = await pool.query(query, [roleId]);

    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'Rola nie znaleziona' });
    }

    // Usuwamy rolę
    const deleteQuery = 'DELETE FROM roles WHERE id = $1 RETURNING id';
    const deleteResult = await pool.query(deleteQuery, [roleId]);

    if (deleteResult.rows.length === 0) {
      return res.status(500).json({ error: '❌ Błąd podczas usuwania roli' });
    }

    res.json({ message: '✅ Rola usunięta pomyślnie', roleId: roleId });

  } catch (err) {
    console.error(err);
    res.status(500).json({ error: '❌ Błąd serwera' });
  }
});

export default router;
