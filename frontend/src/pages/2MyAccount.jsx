import { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import Avatar from '../components/Avatar';
import UserEditForm from '../components/UserEditForm';
import ChangePasswordForm from '../components/ChangePasswordForm';
import ActivityList from '../components/ActivityList';

const tabs = ['Dane', 'Bezpieczeństwo', 'Historia'];

const MyAccount = () => {
  const { user, login } = useAuth();
  const [activeTab, setActiveTab] = useState('Dane');

  if (!user) return null;

  return (
    <div style={{ maxWidth: '800px', margin: 'auto', padding: '2rem' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
        <Avatar name={user.username} />
        <div>
          <h2>Moje konto</h2>
          <p style={{ fontSize: '0.9rem', color: '#666' }}>
            {user.username} ({user.role})
          </p>
        </div>
      </div>

      <div style={{ margin: '1.5rem 0', borderBottom: '1px solid #ccc', display: 'flex', gap: '1.5rem' }}>
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            style={{
              border: 'none',
              background: 'none',
              fontWeight: activeTab === tab ? 'bold' : 'normal',
              borderBottom: activeTab === tab ? '2px solid #007bff' : 'none',
              padding: '0.5rem 0.5rem',
              cursor: 'pointer'
            }}
          >
            {tab === 'Dane' && '👤'} {tab === 'Bezpieczeństwo' && '🔐'} {tab === 'Historia' && '📓'} {tab}
          </button>
        ))}
      </div>

      {activeTab === 'Dane' && (
        <UserEditForm
          user={user}
          onSave={(updatedUser) => login({ user: updatedUser })}
        />
      )}

      {activeTab === 'Bezpieczeństwo' && <ChangePasswordForm userId={user.id} />}

      {activeTab === 'Historia' && <ActivityList userId={user.id} />}
    </div>
  );
};

export default MyAccount;
