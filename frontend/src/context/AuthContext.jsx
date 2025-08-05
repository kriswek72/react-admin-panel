import { createContext, useContext, useState, useEffect, useCallback } from 'react';

const AuthContext = createContext();
export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  
  
  // 🔁 Pobierz dane z localStorage przy starcie
  useEffect(() => {
    const stored = localStorage.getItem('user');
    if (stored) setUser(JSON.parse(stored));
    setLoading(false);
    console.log('🔁 Dane użytkownika z localStorage załadowane');
    console.log('🔑 Token JWT:', localStorage.getItem('token'));

  }, []);

  // ✅ Logowanie z backendu (na podstawie tokena)
  const login = ({ token, user }) => {
    setUser(user);
    localStorage.setItem('token', token);
    localStorage.setItem('user', JSON.stringify(user));
    setLoading(false);
    console.log('🔐 Użytkownik załadowany');
  };

  // ❌ Wylogowanie
  const logout = useCallback(() => {
    setUser(null);
    localStorage.removeItem('user');
    localStorage.removeItem('token');
  }, []);

  // 🔐 Weryfikacja tokena po odświeżeniu strony
  //import { useCallback } from 'react';

  const loginWithToken = useCallback(async () => {
    const token = localStorage.getItem('token');
    if (!token) return;

    try {
      const res = await fetch('http://localhost:4000/api/me', {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
      });

      if (res.ok) {
        const user = await res.json();
        setUser(user);
      } else {
        logout();
      }
    } catch (err) {
      console.error(err);
      logout();
    }
  }, [logout]);

  useEffect(() => {
    loginWithToken();
  }, [loginWithToken]);

  return (
    <AuthContext.Provider value={{ user, login, loginWithToken, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
};
