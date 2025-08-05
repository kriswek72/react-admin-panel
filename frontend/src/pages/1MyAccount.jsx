import { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { maskEmail, maskPhone, maskName } from '../utils/maskUtils';
import Avatar from '../components/Avatar';
import UserEditForm from '../components/UserEditForm';
import ChangePasswordForm from '../components/ChangePasswordForm';
import ActivityList from '../components/ActivityList';



const MyAccount = () => {
  const { user } = useAuth();
  const [editing, setEditing] = useState(false);
  const [changingPass, setChangingPass] = useState(false);
  console.log('MyAccount user:', user);
  
  
  if (!user) return null;

  console.log('MyAccount user:', user);
  if (!user) {
    return <div>Ładowanie...</div>;
  }
  if (!user.username) {
    return <div>Brak danych użytkownika</div>;
  }
  if (!user.role) {
    return <div>Brak roli użytkownika</div>;
  } 
  if (!user.permissions || user.permissions.length === 0) {
    return <div>Brak uprawnień użytkownika</div>;
  }
  if (!user.email) {
    return <div>Brak adresu e-mail użytkownika</div>;
  }
  if (!user.phone) {
    return <div>Brak numeru telefonu użytkownika</div>;
  }
  if (!user.firstName) {
    return <div>Brak imienia użytkownika</div>;
  }
  if (!user.id) {
    return <div>Brak ID użytkownika</div>;
  }
  if (!user.avatar) {
    return <div>Brak awatara użytkownika</div>;
  }
  if (!user.createdAt) {
    return <div>Brak daty utworzenia konta</div>;
  }
  if (!user.updatedAt) {
    return <div>Brak daty ostatniej aktualizacji konta</div>;
  }
  if (!user.lastLogin) {
    return <div>Brak daty ostatniego logowania</div>;
  }
  if (!user.status) {
    return <div>Brak statusu konta użytkownika</div>;
  }
  if (!user.lastActivity) {
    return <div>Brak daty ostatniej aktywności użytkownika</div>;
  }
  if (!user.twoFactorEnabled) {
    return <div>Brak informacji o włączonej autoryzacji dwuskładnikowej</div>;
  }
  if (!user.twoFactorSecret) {
    return <div>Brak sekretu autoryzacji dwuskładnikowej</div>;
  }
  if (!user.twoFactorBackupCodes || user.twoFactorBackupCodes.length === 0) {
    return <div>Brak kodów zapasowych autoryzacji dwuskładnikowej</div>;
  }
  if (!user.lastPasswordChange) {
    return <div>Brak daty ostatniej zmiany hasła</div>;
  }
  if (!user.language) {
    return <div>Brak ustawionego języka użytkownika</div>;
  }
  if (!user.timezone) {
    return <div>Brak ustawionej strefy czasowej użytkownika</div>;
  }

  return (
    <div style={{ maxWidth: '800px', margin: 'auto', padding: '2rem' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
        <Avatar name={user.username} />
        <div>
          <h2>Moje konto</h2>
          <p style={{ fontSize: '0.9rem', color: '#666' }}>
            Witaj, <strong>{user.username} ({user.role})</strong>
          </p>
        </div>
      </div>

      <hr style={{ margin: '1.5rem 0' }} />
      
      {editing && <UserEditForm user={user} onCancel={() => setEditing(false)} />}      
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem' }}>
        <button onClick={() => setEditing(!editing)} style={{ padding: '0.5rem 1rem', backgroundColor: '#007bff', color: 'white', border: 'none', borderRadius: '4px' }}>
          {editing ? '🔙 Anuluj edycję' : '✏️ Edytuj konto'}
        </button>
        <p><strong>👤 Login:</strong> {user.username}</p>
        <p><strong>🛡️ Rola:</strong> {user.role}</p>
        <p><strong>📧 E-mail:</strong> {maskEmail(user.email || 'brak')}</p>
        <p><strong>📱 Telefon:</strong> {maskPhone(user.phone || '000000000')}</p>
        <p><strong>🪪 Imię:</strong> {maskName(user.firstName || user.username)}</p>
      </div>

      <hr style={{ margin: '2rem 0' }} />

      {changingPass && <ChangePasswordForm userId={user.id} onCancel={() => setChangingPass(false)} />}
        <button onClick={() => setChangingPass(!changingPass)} style={{ padding: '0.5rem 1rem', backgroundColor: '#28a745', color: 'white', border: 'none', borderRadius: '4px' }}>
          {changingPass ? '🔙 Anuluj zmianę hasła' : '🔐 Zmień hasło'}
        </button>
      
      <hr style={{ margin: '2rem 0' }} />
      
      <ActivityList userId={user.id} />
      <hr style={{ margin: '2rem 0' }} />
      <p><strong>📅 Data utworzenia:</strong> {new Date(user.createdAt).toLocaleDateString()}</p>
      <p><strong>📅 Ostatnia aktualizacja:</strong> {new Date(user.updatedAt).toLocaleDateString()}</p>
      <p><strong>📅 Ostatnie logowanie:</strong> {new Date(user.lastLogin).toLocaleDateString()}</p>
      <p><strong>📅 Ostatnia aktywność:</strong> {new Date(user.lastActivity).toLocaleDateString()}</p>
      <p><strong>🔒 Status konta:</strong> {user.status}</p>
      <p><strong>🌐 Język:</strong> {user.language || 'brak'}</p>
      <p><strong>🕒 Strefa czasowa:</strong> {user.timezone || 'brak'}</p>
      <p><strong>🔐 Autoryzacja dwuskładnikowa:</strong> {user.twoFactorEnabled ? 'Włączona' : 'Wyłączona'}</p>
      {user.twoFactorEnabled && (
    <>
          <p><strong>🔑 Sekret:</strong> {user.twoFactorSecret}</p>
          <p><strong>🔑 Kody zapasowe:</strong></p>
          <ul style={{ paddingLeft: '1.2rem' }}>
            {user.twoFactorBackupCodes.map((code, i) => (
              <li key={i} style={{ fontSize: '0.95rem' }}>{code}</li>
            ))}
          </ul>
        </>
      )}
      <p><strong>📅 Ostatnia zmiana hasła:</strong> {user.lastPasswordChange ? new Date(user.lastPasswordChange).toLocaleDateString() : 'Brak'}</p>
      <p><strong>🖼️ Awatar:</strong> {user.avatar ? <img src={user.avatar} alt="Avatar" style={{ width: '50px', height: '50px', borderRadius: '50%' }} /> : 'Brak'}</p>
      <p><strong>🆔 ID użytkownika:</strong> {user.id}</p>
      <p><strong>📜 Uprawnienia:</strong> {user.permissions?.length || 0} dostępnych</p>
      <p style={{ fontSize: '0.9rem', color: '#666' }}>
        <strong>📅 Ostatnia aktywność:</strong> {user.lastActivity ? new Date(user.lastActivity).toLocaleDateString() : 'Brak'}
      </p>

      <hr style={{ margin: '2rem 0' }} />
      <p style={{ fontSize: '0.9rem', color: '#666' }}>
        <strong>🔍 Szczegóły konta:</strong> {user.details || 'Brak dodatkowych informacji'}
      </p>
      <p style={{ marginTop: '1rem' }}><strong>📜 Uprawnienia użytkownika:</strong></p>     
      <ul style={{ paddingLeft: '1.2rem' }}>
        {user.permissions?.map((perm, i) => (
          <li key={i} style={{ fontSize: '0.95rem' }}>{perm}</li>
        ))}
      </ul>
    </div>
  );
};

export default MyAccount;
// Usage example:
// <MyAccount />