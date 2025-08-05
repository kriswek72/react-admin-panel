import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { toast } from 'react-toastify';
import MainLayout from '../components/MainLayout';

const Login = () => {
  const { login } = useAuth();
  const navigate = useNavigate();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    const res = await fetch('http://localhost:4000/api/login', {
      method: 'POST',
      headers: { Authorization: `Bearer ${localStorage.getItem('token')}`, 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password }) // 👈 dynamiczne wartości!
    });

    const data = await res.json();

    if (res.ok) {
      login({ token: data.token, user: data.user });
      toast.success(`Witaj ponownie, ${data.user.username}! 👋`);
      const redirectPath = localStorage.getItem('lastVisited') || '/';
      navigate(redirectPath);
      localStorage.removeItem('lastVisited');
    } else if (data.error === 'Użytkownik nie istnieje') {
      toast.error(data.error);
    } else {
      toast.error(`Błąd logowania: ${data.error} ⛔`);
    }
  };

  return (
    
    <div className="login-form">
      <h2>Login</h2>
      <p>Wprowadź swoje dane logowania:</p>
      <div className="input-group">
        <input
          type="text"
          placeholder="Nazwa użytkownika"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          style={{ padding: '0.5rem', borderRadius: '4px', border: '1px solid #ccc' }}
        />
        <input
          type="password"
          placeholder="Hasło"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{ padding: '0.5rem', borderRadius: '4px', border: '1px solid #ccc' }}
        />
        <button
          onClick={handleLogin}
          style={{ padding: '0.5rem', borderRadius: '4px', border: 'none', backgroundColor: '#28a745', color: '#fff' }}
        >
          🔐 Zaloguj
        </button>
      </div>
    </div>
  );
};

export default Login;
