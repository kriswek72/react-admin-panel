import { useState, useEffect } from 'react';

export const useCurrentUser = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      console.warn('🔐 Brak tokena w localStorage!');
      setError('Brak tokena');
      setLoading(false);
      return;
    }

    fetch('http://localhost:4000/api/user', {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`
      }
    })
      .then((res) => {
        if (!res.ok) throw new Error('Unauthorized');
        return res.json();
      })
      .then((data) => {
        console.log('📦 Dane zwrócone z /api/user:', data); // 👈 LOG!
        setUser(data);
      })
      .catch((err) => {
        console.error('❌ Błąd w fetchu /api/user:', err);
        setError(err.message);
      })
      .finally(() => setLoading(false));
  }, []);

  return { user, loading, error };
};

export const useAuth = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const login = (userData) => {
    localStorage.setItem('token', userData.token);
    setUser(userData.user);
    setLoading(false);
  };

  const logout = () => {
    localStorage.removeItem('token');
    setUser(null);
    setLoading(false);
  };

  return { user, loading, login, logout };
};