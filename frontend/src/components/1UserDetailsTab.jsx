import { maskEmail, maskPhone, maskName } from '../utils/maskUtils';

const UserDetailsTab = ({ user }) => {
  if (!user) return <p>Brak danych użytkownika</p>;

  return (
    <div style={{ lineHeight: '1.8' }}>
      <p><strong>👤 Login:</strong> {user.username}</p>
      <p><strong>🛡️ Rola:</strong> {user.role}</p>
      <p><strong>📧 E-mail:</strong> {maskEmail(user.email)}</p>
      <p><strong>📱 Telefon:</strong> {maskPhone(user.phone)}</p>
      <p><strong>🪪 Imię:</strong> {maskName(user.firstName)}</p>
      <p><strong>🆔 ID:</strong> {user.id}</p>
      <p><strong>🌐 Język:</strong> {user.language || 'Brak'}</p>
      <p><strong>🕒 Strefa czasowa:</strong> {user.timezone || 'Brak'}</p>
      <p><strong>🔒 Status konta:</strong> {user.status}</p>
      <p><strong>📅 Utworzono:</strong> {new Date(user.createdAt).toLocaleString()}</p>
      <p><strong>📅 Ostatnia aktualizacja:</strong> {new Date(user.updatedAt).toLocaleString()}</p>
      <p><strong>📅 Ostatnie logowanie:</strong> {new Date(user.lastLogin).toLocaleString()}</p>
      <p><strong>📅 Ostatnia aktywność:</strong> {new Date(user.lastActivity).toLocaleString()}</p>
      <p><strong>📅 Ostatnia zmiana hasła:</strong> {user.lastPasswordChange ? new Date(user.lastPasswordChange).toLocaleString() : 'Brak'}</p>

      <p style={{ marginTop: '1rem' }}><strong>📜 Uprawnienia:</strong></p>
      <ul style={{ paddingLeft: '1.2rem' }}>
        {user.permissions?.map((perm, i) => (
          <li key={i}>{perm}</li>
        ))}
      </ul>

      {user.details && (
        <>
          <p style={{ marginTop: '1rem' }}><strong>🔍 Dodatkowe informacje:</strong></p>
          <p>{user.details}</p>
        </>
      )}

      {user.avatar && (
        <>
          <p style={{ marginTop: '1rem' }}><strong>🖼️ Awatar:</strong></p>
          <img src={user.avatar} alt="Avatar" style={{ width: 60, height: 60, borderRadius: '50%' }} />
        </>
      )}
    </div>
  );
};

export default UserDetailsTab;
// Usage: <UserDetailsTab user={currentUser} />
// Ensure you have the user object available in the parent component where this tab is used.
// This component displays detailed information about a user, including their login, role, email, phone, name, ID, language, timezone, account status, creation date, last update, last login, last activity, last password change, permissions, additional details, and avatar if available.
// It uses utility functions to mask sensitive information like email and phone numbers for privacy.