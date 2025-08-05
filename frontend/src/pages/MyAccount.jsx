import { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import Avatar from '../components/Avatar';
import UserEditForm from '../components/UserEditForm';
import ChangePasswordForm from '../components/ChangePasswordForm';
import ActivityList from '../components/ActivityList';
import UiPreferencesTab from '../components/UiPreferencesTab';
import { useCurrentUser } from '../hooks/useCurrentUser';

const tabs = [
  { id: 'profile', label: '👤 Dane' },
  { id: 'security', label: '🔐 Bezpieczeństwo' },
  { id: 'activity', label: '📓 Historia' },
  { id: 'ui', label: '🎨 Interfejs' },
  { id: 'preferences', label: '⚙️ Preferencje' }

];

const MyAccount = () => {
  const { user, login } = useAuth();
  const [activeTab, setActiveTab] = useState('profile');
  const { user: currentUser, loading, error } = useCurrentUser();

  if (!user) return null;
  if (!currentUser) return <p>❌ Nie znaleziono użytkownika.</p>;
  if (loading) return <p>🔄 Ładowanie danych użytkownika...</p>;
  if (error) return <p>⛔ Błąd: {error}</p>;

  return (
    <div style={{ maxWidth: '800px', margin: 'auto', padding: '2rem' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
        <Avatar name={user.username} />
        <div>
          <h2>Moje konto</h2>
          <p style={{ fontSize: '0.9rem', color: '#666' }}>
            {user.username} ({user.role})
          </p>
        </div>
      </div>
      {/* Zakładki */}
      <div style={{ display: 'flex', gap: '1.5rem', borderBottom: '1px solid #ccc', marginBottom: '1.5rem' }}>
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
              cursor: 'pointer',
              fontSize: '1rem'
            }}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Zakładka: Dane użytkownika */}
      {activeTab === 'profile' && (
        <UserEditForm
          user={user}
          onSave={(updatedUser) => login({ user: updatedUser })}
        />
      )}
      
      {/* Zakładka: Bezpieczeństwo */}
      {activeTab === 'security' && <ChangePasswordForm userId={user.id} />}
        
      {/* Zakładka: Historia */}  
      {activeTab === 'activity' && <ActivityList userId={user.id} />}
      
      {/* Zakładka: Preferencje */}
      {activeTab === 'preferences' && <UiPreferencesTab user={user} />}
    </div>
  );
};

export default MyAccount;