import { Link } from 'react-router-dom';
import modulesConfig from '../config/modulesConfig';
import { useTheme } from '../context/ThemeContext';
import { useAuth } from '../context/AuthContext';


const Sidebar = () => {
  useTheme(); // Możesz użyć np. theme do stylów

  const { user } = useAuth();

  if (!user?.permissions || user.permissions.length === 0) {
  return (
    <aside style={{ padding: '2rem' }}>
      <p>⚠️ Brak dostępnych modułów. Użytkownik nie ma przypisanych uprawnień.</p>
    </aside>
  );
  }

  const navbarHeight = 60;

  // Filtrowanie modułów wg uprawnień użytkownika
  const accessibleModules = modulesConfig.filter(
    module => !module.permission || user.permissions.includes(module.permission)
  );

  return (
    <aside style={{
      width: '250px',
      background: 'var(--sidebar-bg)',
      color: 'var(--text)',
      padding: '1rem',
      position: 'fixed',
      left: 0,
      top: `${navbarHeight}px`,
      height: `calc(100vh - ${navbarHeight}px - 20px)`,
      overflowY: 'auto'
    }}>
      <h3 style={{ marginBottom: '1rem' }}>📂 Moduły</h3>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {accessibleModules.map(({ path, name, icon }) => (
          <li key={path} style={{ marginBottom: '0.5rem' }}>
            <Link to={path} style={{ color: 'var(--link)', textDecoration: 'none' }}>
              {icon || '📁'} {name}
            </Link>
          </li>
        ))}
        {accessibleModules.length === 0 && (
          <li style={{ fontStyle: 'italic', color: '#999' }}>Brak dostępnych modułów</li>
        )}
      </ul>
    </aside>
  );
};

export default Sidebar;
