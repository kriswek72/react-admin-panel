import jwt from 'jsonwebtoken';

export const verifyToken = (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader) {
    console.log('❌ Brak nagłówka Authorization');
    return res.status(401).json({ error: 'Brak tokena autoryzacyjnego' });
  }

  const token = authHeader.split(' ')[1];
  if (!token) {
    console.log('❌ Brak tokena w nagłówku');
    return res.status(401).json({ error: 'Nieprawidłowy format tokena' });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (err) {
    console.error('❌ Błąd przy weryfikacji tokena:', err.message);
    res.status(403).json({ error: 'Token JWT nieprawidłowy lub wygasł' });
  }
};

// Middleware to verify JWT token
// This middleware checks if the request has a valid JWT token in the Authorization header.