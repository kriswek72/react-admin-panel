import { maskEmail, maskPhone, maskName } from '../utils/maskUtils';

const InfoRow = ({ icon, label, value }) => (
  <div style={{ display: 'flex', gap: '0.5rem', padding: '0.25rem 0' }}>
    <span style={{ fontSize: '1.2rem' }}>{icon}</span>
    <span style={{ fontWeight: 500, width: '160px' }}>{label}:</span>
    <span style={{ color: '#333' }}>{value}</span>
  </div>
);

const Section = ({ title, children }) => (
  <div style={{ marginBottom: '2rem' }}>
    <h3 style={{ borderBottom: '1px solid #ccc', paddingBottom: '0.3rem', marginBottom: '1rem', fontSize: '1.1rem' }}>{title}</h3>
    {children}
  </div>
);

const UserDetailsTab = ({ user }) => {
  if (!user) return <p>Brak danych użytkownika</p>;

  return (
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
      {/* Sekcja 1 */}
      <Section title="📇 Dane podstawowe">
        <InfoRow icon="👤" label="Login" value={user.username} />
        <InfoRow icon="🛡️" label="Rola" value={user.role} />
        <InfoRow icon="📧" label="E-mail" value={maskEmail(user.email)} />
        <InfoRow icon="📱" label="Telefon" value={maskPhone(user.phone)} />
        <InfoRow icon="🪪" label="Imię" value={maskName(user.firstName)} />
        <InfoRow icon="🆔" label="ID" value={user.id} />
      </Section>
      <Section title="🌍 Ustawienia regionalne">
        <InfoRow icon="🌐" label="Język" value={user.language || 'Nie ustawiony'} />
        <InfoRow icon="🕒" label="Strefa czasowa" value={user.timezone || 'Nie ustawiona'} />
        <InfoRow icon="🔒" label="Status konta" value={user.status} />
      </Section>
      <Section title="📅 Historia konta">
        <InfoRow icon="🗓️" label="Utworzone" value={new Date(user.createdAt).toLocaleString()} />
        <InfoRow icon="🔄" label="Aktualizacja" value={new Date(user.updatedAt).toLocaleString()} />
        <InfoRow icon="🚪" label="Ostatnie logowanie" value={new Date(user.lastLogin).toLocaleString()} />
        <InfoRow icon="📍" label="Ostatnia aktywność" value={new Date(user.lastActivity).toLocaleString()} />
        <InfoRow icon="🔑" label="Zmiana hasła" value={user.lastPasswordChange ? new Date(user.lastPasswordChange).toLocaleString() : 'Brak'} />
      </Section>
      <Section title="🖼️ Awatar i pozostałe">
        {user.avatar
          ? <img src={user.avatar} alt="Avatar" style={{ width: 64, height: 64, borderRadius: '50%', border: '2px solid #ccc' }} />
          : <p>Brak zdjęcia profilowego</p>}
        <InfoRow icon="📜" label="Uprawnień" value={`${user.permissions?.length || 0} przypisanych`} />
      </Section>
      {user.details && (
        <Section title="📝 Notatki wewnętrzne">
          <p>{user.details}</p>
        </Section>
      )}
    </div>
  );
};

export default UserDetailsTab;
// This component is designed to be used in a user management system, specifically in a user details tab.
// It displays detailed information about a user in a structured format, including their login, role, email, phone, name, ID, language, timezone, account status, creation date, last update, last login, last activity, last password change, permissions, additional details, and avatar if available.
// It uses utility functions to mask sensitive information like email and phone numbers for privacy.
//
// To use this component, you would typically import it into a parent component where user details are displayed, passing the user object as a prop.
// Usage: <UserDetailsTab user={currentUser} />
// Ensure you have the user object available in the parent component where this tab is used.
// This component displays detailed information about a user, including their login, role, email, phone, name, ID, language, timezone, account status, creation date, last update, last login, last activity, last password change, permissions, additional details, and avatar if available.
// It uses utility functions to mask sensitive information like email and phone numbers for privacy.