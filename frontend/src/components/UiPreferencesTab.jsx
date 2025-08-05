import { useState, useEffect } from 'react';

const UiPreferencesTab = ({ user }) => {
  const [theme, setTheme] = useState(user.theme || 'light');
  const [language, setLanguage] = useState(user.language || 'pl');

  useEffect(() => {
    document.body.setAttribute('data-theme', theme);
  }, [theme]);

  const handleSave = () => {
    alert(`✔️ Zapisano preferencje: motyw = ${theme}, język = ${language}`);
    // TODO: wyślij PATCH na backend np. /api/users/:id/preferences
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <div>
        <label><strong>🌗 Motyw:</strong></label><br />
        <select value={theme} onChange={(e) => setTheme(e.target.value)}>
          <option value="light">Jasny</option>
          <option value="dark">Ciemny</option>
          <option value="system">Systemowy</option>
        </select>
      </div>

      <div>
        <label><strong>🌍 Język:</strong></label><br />
        <select value={language} onChange={(e) => setLanguage(e.target.value)}>
          <option value="pl">Polski 🇵🇱</option>
          <option value="en">English 🇬🇧</option>
        </select>
      </div>

      <button onClick={handleSave}>💾 Zapisz ustawienia</button>
    </div>
  );
};

export default UiPreferencesTab;
