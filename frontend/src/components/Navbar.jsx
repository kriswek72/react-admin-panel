// src/components/Navbar.jsx
import { Link } from 'react-router-dom';
// import Avatar from './Avatar';
import { useAuth } from '../context/AuthContext';
import { useTheme } from '../context/ThemeContext';
import UserDropdown from './UserDropdown';

const navbarHeight = 30; // You can adjust the height as needed

const Navbar = () => {
  const { dark, toggleTheme } = useTheme();
  const { user } = useAuth();
  // const navigate = useNavigate();
  // const handleLogout = () => {
  //   logout();
  //   navigate('/login');
  // };
  console.log('Auth ready', user);

  return (
    <nav style={{
      background: dark ? '#333' : '#f3f3f3',
      padding: '0.5rem 1rem',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      height: `${navbarHeight}px`
    }}>
      
      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
        <Link to="/" style={{
          color: 'var(--text)',
          textDecoration: 'none',
          fontWeight: 'bold',
          fontSize: '1.2rem',
          marginLeft: '3rem'
        }}>
         📋 Panel administracyjny
         
        </Link>
      </div>

      {user && (
        <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
          <button onClick={toggleTheme}>
            {dark ? '☀️ Jasny' : '🌙 Ciemny'}
          </button>
          <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
            <UserDropdown />
          {/*<Avatar name={user.username} />*/}
          {/*<span style={{ fontWeight: '500' }}>Witaj, {user.username}</span>*/}
        </div>

        {/*<button onClick={handleLogout}>🚪 Wyloguj</button>*/}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
