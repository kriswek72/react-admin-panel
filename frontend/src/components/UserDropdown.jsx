import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useTheme } from '../context/ThemeContext';
import Avatar from './Avatar';

const UserDropdown = () => {
  const { dark } = useTheme();
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  if (!user) return null;

  return (
    <div style={{ position: 'relative' }}>
      <div
        onClick={() => setOpen(!open)}
        style={{ cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.5rem' }}
      >
        <Avatar name={user.username} />
        <span>{user.username}</span>
      </div>

      {open && (
        <div
          onMouseLeave={() => setOpen(false)}
          style={{
            position: 'absolute',
            top: '100%',
            right: 0,
            background: dark ? '#333' : '#fff',
            color: dark ? '#fff' : '#000',
            border: '1px solid #ddd',
            borderRadius: '6px',
            boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
            zIndex: 1000,
            minWidth: '160px',
            padding: '0.5rem 0'
          }}
        >
          <div
            onClick={() => {
              navigate('/my-account');
              setOpen(false);
            }}
            style={{ padding: '0.5rem 1rem', cursor: 'pointer', whiteSpace: 'nowrap' }}
          >
            👤 Moje konto
          </div>
          <div
            onClick={() => {
              logout();
              navigate('/login');
            }}
            style={{ padding: '0.5rem 1rem', cursor: 'pointer', whiteSpace: 'nowrap' }}
          >
            🚪 Wyloguj
          </div>
        </div>
      )}
    </div>
  );
};

export default UserDropdown;
