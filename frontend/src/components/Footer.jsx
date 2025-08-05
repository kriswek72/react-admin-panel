// src/components/Footer.jsx
import { useTheme } from '../context/ThemeContext';
import { useAuth } from '../context/AuthContext';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { dark } = useTheme();
  const { user } = useAuth();
  const roleIcons = {
    superadmin: '🛡️',
    editor: '✏️',
    viewer: '👀',
    admin: '👨‍💼',
    user: '👤',
  };

  return (
    <footer style={{ padding: '1rem', marginTop: 'auto', background: dark ? '#333' : '#f3f3f3', textAlign: 'center', height: '30px' }}>
      <small>© {currentYear} Panel administracyjny by Krzysztof Wnukowski</small>
      {user && (
        <div style={{ marginTop: '0.1rem', fontStyle: 'italic', color: '#666' }}>
          Zalogowany jako: {roleIcons[user.role]} <strong>{user.username}</strong> ({user.role})
        </div>
      )}
    </footer>
  );
};

export default Footer;
