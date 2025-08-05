// src/components/Header.jsx
const Header = () => {
  return (
    <header style={{ padding: '1rem', background: '#f3f3f3', display: 'flex', justifyContent: 'space-between' }}>
      <h2>Admin Panel</h2>
      <button onClick={() => alert('Logowanie tymczasowo nieaktywne')} style={{ cursor: 'pointer' }}>
        Zaloguj się
      </button>
    </header>
  );
};

export default Header;
