// backend/index.js
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import authRoutes from './routes/authRoutes.js';
import pool from './db.js';
import bcrypt from 'bcrypt';
import { verifyToken } from './middleware/verifyToken.js';
import jwt from 'jsonwebtoken';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 4000;

const Pool = {
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
};
pool.connect((err) => {
    console.log('🔗 Łączenie z bazą danych...');
    console.log('✅ Połączono z bazą danych PostgreSQL');
    console.log(`🔗 Połączono z bazą danych: ${Pool.database}:${Pool.host}:${Pool.port}`);
    if (err) {
    console.error('❌ Błąd połączenia z bazą danych:', err);
    pool.end();
    console.log('❌ Zamykanie połączenia z bazą danych...');
    process.exit(1);
  }
});


// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/auth', authRoutes);

// Prosty testowy endpoint
app.get('/', (req, res) => {
  console.log('🌐 Otrzymano żądanie do głównego endpointu');
  res.send('✅ Backend działa! 🚀');
});
// Endpoint do testowania CORS
app.get('/api/test-cors', (req, res) => {
  console.log('🌐 Otrzymano żądanie do endpointu testowania CORS');
  res.json({ message: '✅ Test CORS działa!' });
});
// Endpoint do pobierania danych użytkownika
app.get('/api/user', verifyToken, async (req, res) => {
  try {
    console.log('🌐 Otrzymano żądanie do endpointu pobierania danych użytkownika');
    const { id } = req.user;
    console.log('🔎 Pobieranie danych użytkownika o ID:', id);
    const result = await pool.query('SELECT * FROM users WHERE id = $1', [id]);
    console.log('🔎 Wynik zapytania do bazy danych:', result);

    if (result.rows.length === 0) {
      console.log('❌ Użytkownik nie został znaleziony w bazie danych');
      return res.status(404).json({ error: 'Użytkownik nie został znaleziony' });
    }

    const user = result.rows[0];
    res.json({
      id: user.id,
      username: user.username,
      role: user.role,
      permissions: user.permissions,
      email: user.email,
      phone: user.phone,
      avatar: user.avatar,
      language: user.language,
      timezone: user.timezone
    });
    console.log('✅ Pobranie danych użytkownika zakończone sukcesem:', user);
  } catch (err) {
    console.error(err);
    console.log('❌ Błąd podczas pobierania danych użytkownika:', err);
    // Jeśli wystąpił błąd, zwróć status 500    
    res.status(500).json({ error: 'Błąd serwera przy pobieraniu użytkownika' });
  }
});
// Endpoint do pobierania aktualnego czasu
app.get('/api/time', async (req, res) => {
    console.log('⏰ Pobieranie aktualnego czasu...');
    try {
        const currentTime = new Date();
        res.json({ time: currentTime.toISOString() });
        console.log('✅ Aktualny czas:', currentTime.toISOString());
    } catch (error) {
        console.log('❌ Błąd podczas pobierania czasu:', error);
        res.status(500).json({ error: '❌ Błąd podczas pobierania czasu' });
    }
});
// Endpoint logowania użytkownika
app.post('/login', async (req, res) => {
  try {
    const { username, password } = req.body;
    console.log('🔎 Otrzymano żądanie logowania ➡️ :', username, password);

    const result = await pool.query('SELECT * FROM users WHERE username = $1', [username]);
    if (result.rows.length === 0) {
      console.log('❌ Użytkownik nie znaleziony:', username);
      return res.status(404).json({ message: '❌ Użytkownik nie znaleziony' });
    }
    console.log('Wynik zapytania:', result);

    if (result.rows.length > 0) {
      const user = result.rows[0];
      console.log('✅ Znaleziono użytkownika:➡️', user);

      const isMatch = await bcrypt.compare(password, user.password); // Porównanie haseł
      console.log('🔍 Dopasowanie hasła:', isMatch);

      if (isMatch) {
        res.json({ message: '✅ Login successful', user });
      } else {
        res.status(400).json({ message: '❌ Invalid password' });
      }
    } else {
      res.status(400).json({ message: '❌ User not found' });
    }
  } catch (err) {
    console.error(err.message);
    console.log('❌ Błąd podczas logowania:', err);
    // Jeśli wystąpił błąd, zwróć status 500
    res.status(500).send('Server error');
  }
});

// Auth endpoint (placeholder — rozbudujemy)
app.post('/api/login', async (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) {
    return res.status(400).json({ error: 'Brak nazwy użytkownika lub hasła' });
  }
  console.log('🔎 Otrzymano żądanie logowania ➡️', username);
  console.log('🔐 Próba logowania:', password);

  try {
    const result = await pool.query('SELECT * FROM users WHERE username = $1', [username]);
    console.log('Wynik zapytania:', result);

    if (result.rows.length > 0) {
      const user = result.rows[0];
      console.log('✅ Znaleziono użytkownika:➡️', user);

      const isMatch = await bcrypt.compare(password, user.password); // Porównanie haseł
      console.log('🔍 Dopasowanie hasła:', isMatch);

      if (isMatch) {
        return res.json({
          token: jwt.sign(
            { id: user.id, role: user.role },
            process.env.JWT_SECRET,
            { expiresIn: '1h' }
          ),
          user: {
            id: user.id,
            username: user.username,
            role: user.role,
            permissions: user.permissions
          }
        });
      }
    }
    return res.status(401).json({ error: 'Nieprawidłowe dane logowania' });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Błąd serwera podczas logowania' });
  }
});

// Start serwera
app.listen(PORT, () => {
  console.log(`✅ Backend działa na http://localhost:${PORT}`);
});
