import { useState } from 'react';
import { Link } from 'react-router-dom';
import useWindowWidth from '../hooks/useWindowWidth';
import { modulesConfig } from '../config/modulesConfig';
import HamburgerButton from './HamburgerButton';
import { useAuth } from '../context/AuthContext';


export const sidebarWidth = 200; // exportowane
export const sidebarPadding = 16; // exportowane
export const navbarHeight = 60; // exportowane
const ResponsiveSidebar = () => {
  const { user } = useAuth();
  const width = useWindowWidth();
  const [isOpen, setIsOpen] = useState(false);
  const availableModules = user?.permissions || [];

  const links = modulesConfig
  .filter(({ permission }) => !permission || availableModules.includes(permission))
  // Filtrowanie modułów wg uprawnień użytkownika
  .filter(({ path }) => path) // Upewnij się, że moduł ma zdefiniowaną ścieżkę
  // Mapowanie modułów na linki
  .map(({ path, name, icon }) => ({
    path,
    label: name,
    icon: icon || '📁' // domyślna ikona, jeśli nie podano
  }));

  const isMobile = width < 768;

  // Jeśli użytkownik nie ma uprawnień lub brak modułów, wyświetl komunikat
  if (!user?.permissions || user.permissions.length === 0 || !modulesConfig || modulesConfig.length === 0) {
    console.warn('Brak dostępnych modułów lub uprawnień użytkownika.');
    return (
      <aside style={{ padding: '2rem' }}>
        <p>⚠️ Brak dostępnych modułów. Użytkownik nie ma przypisanych uprawnień.</p>
      </aside>
    );
  } 
  console.log('user.permissions:', user.permissions);
  console.log('modulesConfig:', modulesConfig);
  console.log('availableModules:', availableModules);

  return (
    <>
      {/* Hamburger icon */}
      {isMobile && (
        <HamburgerButton isOpen={isOpen} toggle={() => setIsOpen(!isOpen)} />
      )}
        
      {/* Sidebar */}
      <aside
        style={{
          width: isMobile ? (isOpen ? '200px' : '0') : '170px',
          background: 'var(--sidebar-bg)',
          color: 'var(--text)',
          padding: isMobile ? (isOpen ? '1rem' : '0') : '1rem',
          height: '100vh',
          position: 'fixed',
          left: 0,
          top: 0,
          overflow: 'hidden',
          transition: 'width 0.3s ease, padding 0.3s ease',
          zIndex: 999
        }}
      >
        <h3>📂 Moduły</h3>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          {links.map(({ path, label, icon }) => (
            <li key={path}>
              <Link to={path} onClick={() => isMobile && setIsOpen(false)} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <span style={{ minWidth: '1.5rem', textAlign: 'center' }}>{icon}</span>
                {label}
              </Link>

            </li>
          ))}
        </ul>
      </aside>
    </>
  );
};

export default ResponsiveSidebar;
