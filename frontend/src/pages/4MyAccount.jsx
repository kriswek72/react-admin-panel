import { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import Avatar from '../components/Avatar';
import UserEditForm from '../components/UserEditForm';
import ChangePasswordForm from '../components/ChangePasswordForm';
import ActivityList from '../components/ActivityList';
import UserDetailsTab from '../components/UserDetailsTab';
import UiPreferencesTab from '../components/UiPreferencesTab';
import { useCurrentUser } from '../hooks/useCurrentUser';

const tabs = [
  { id: 'details', label: '👤 Dane' },
  { id: 'security', label: '🔐 Bezpieczeństwo' },
  { id: 'activity', label: '📓 Historia' },
  { id: 'preferences', label: '⚙️ Preferencje' }
];


const MyAccount = () => {
  const { user, login } = useAuth();
  const [activeTab, setActiveTab] = useState('details');
  const { user: currentUser, loading, error } = useCurrentUser();

  if (loading) return <p>🔄 Ładowanie danych użytkownika...</p>;
  if (error) return <p>⛔ Błąd: {error}</p>;  
  if (!currentUser) return <p>❌ Nie znaleziono użytkownika.</p>;
  if (!user) return <p>❌ Nie jesteś zalogowany.</p>;  
  if (user?.username !== currentUser?.username) {
    return <p>❌ Nie masz uprawnień do przeglądania tego konta.</p>;
  }



  return (
    <div style={{ maxWidth: '900px', margin: 'auto', padding: '2rem' }}>
      {/* Header z avatar + username */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
        {user.avatar
          ? <img src={user.avatar} alt="Avatar" style={{ width: 48, height: 48, borderRadius: '50%' }} />
          : <Avatar name={user.username} />
        }
        <div>
          <h2>Moje konto</h2>
          <p style={{ fontSize: '0.9rem', color: '#666' }}>{user.username} ({user.role})</p>
        </div>
      </div>

      {/* Zakładki */}
      <div style={{ display: 'flex', gap: '2rem', borderBottom: '1px solid #ccc', margin: '1.5rem 0' }}>
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            style={{
              border: 'none',
              background: 'none',
              fontWeight: activeTab === tab.id ? 'bold' : 'normal',
              borderBottom: activeTab === tab.id ? '2px solid #007bff' : 'none',
              padding: '0.5rem 0',
              fontSize: '1rem',
              cursor: 'pointer'
            }}
          >
            {tab.label}
          </button>
        ))}
      </div>
      {activeTab === 'details' && (
      <UserDetailsTab user={user} />
    )}

      {/* Zakładka: Dane */}
      {activeTab === 'details' && (
        <div>
          <UserEditForm user={user} onSave={(u) => login({ user: u })} />
          <div style={{ marginTop: '2rem' }}>
            <p><strong>📅 Utworzone:</strong> {user.createdAt ? new Date(user.createdAt).toLocaleString() : 'Brak danych'}</p>
            <p><strong>📅 Ostatnia aktualizacja:</strong> {user.updatedAt ? new Date(user.updatedAt).toLocaleString() : 'Brak danych'}</p>
            <p><strong>📅 Ostatnie logowanie:</strong> {user.lastLogin ? new Date(user.lastLogin).toLocaleString() : 'Brak danych'}</p>
            <p><strong>📅 Ostatnia aktywność:</strong> {user.lastActivity ? new Date(user.lastActivity).toLocaleString() : 'Brak danych'}</p>
            <p><strong>🌐 Strefa czasowa:</strong> {user.timezone || 'Nie ustawiona'}</p>
            <p><strong>🌍 Język:</strong> {user.language || 'Nie ustawiony'}</p>
            <p><strong>🆔 ID użytkownika:</strong> {user.id}</p>
          </div>
        </div>
      )}

      {/* Zakładka: Bezpieczeństwo */}
      {activeTab === 'security' && (
        <div>
          <ChangePasswordForm userId={user.id} />
          <div style={{ marginTop: '2rem' }}>
            <p><strong>🔒 Status konta:</strong> {user.status}</p>
            <p><strong>📅 Ostatnia zmiana hasła:</strong> {user.lastPasswordChange ? new Date(user.lastPasswordChange).toLocaleString() : 'Brak'}</p>
            <p><strong>🔐 2FA:</strong> {user.twoFactorEnabled ? 'Włączone' : 'Wyłączone'}</p>

            {user.twoFactorEnabled && (
              <>
                <p><strong>🔑 Sekret:</strong> {user.twoFactorSecret}</p>
                <p><strong>🧩 Kody zapasowe:</strong></p>
                <ul style={{ paddingLeft: '1.2rem' }}>
                  {user.twoFactorBackupCodes?.map((code, i) => (
                    <li key={i} style={{ fontFamily: 'monospace' }}>{code}</li>
                  ))}
                </ul>
                <button onClick={() => alert('🔁 Regeneracja kodów zapasowych – tu dodaj żądanie do backendu')} style={{ marginTop: '1rem' }}>
                  ♻️ Regeneruj kody zapasowe
                </button>
              </>
            )}
          </div>
        </div>
      )}
      {/* Zakładka: Preferencje */}
      {activeTab === 'preferences' && <UiPreferencesTab user={user} />}

      {/* Zakładka: Historia */}
      {activeTab === 'activity' && (
        <ActivityList userId={user.id} />
      )}
    </div>
  );
};

export default MyAccount;
