import { useState } from 'react';
//import UserProfile from './UserProfile'; // Assuming UserProfile is a component that handles the user profile display and editing

const UserEditForm = ({ user, onSave }) => {
  const [form, setForm] = useState({
    firstName: user.firstName || '',
    lastName: user.lastName || '',
    email: user.email || '',
    phone: user.phone || '',
    address: user.address || '',
    bio: user.bio || '',
    avatar: user.avatar || '',
    role: user.role || '',
    permissions: user.permissions || '',
    status: user.status || '',
    createdAt: user.createdAt || '',
    updatedAt: user.updatedAt || '',
    lastLogin: user.lastLogin || '',
    lastActivity: user.lastActivity || ''
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch(`http://localhost:4000/api/users/${user.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('token')}`
      },
      body: JSON.stringify(form)
    });

    if (res.ok) {
      const updated = await res.json();
      onSave(updated);
    } else {
      alert('Nie udało się zaktualizować profilu');
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <input name="firstName" placeholder="Imię" value={form.firstName} onChange={handleChange} />
        <input name="lastName" placeholder="Nazwisko" value={form.lastName} onChange={handleChange} />        
        <input name="email" placeholder="E-mail" value={form.email} onChange={handleChange} />
        <input name="phone" placeholder="Telefon" value={form.phone} onChange={handleChange} />
        <input name="address" placeholder="Adres" value={form.address} onChange={handleChange} />
        <textarea name="bio" placeholder="Bio" value={form.bio} onChange={handleChange} />
        <input name="avatar" placeholder="URL do awatara" value={form.avatar} onChange={handleChange} />
        <input name="role" placeholder="Rola" value={form.role} onChange={handleChange} />
        <input name="permissions" placeholder="Uprawnienia" value={form.permissions} onChange={handleChange} />
        <input name="status" placeholder="Status" value={form.status} onChange={handleChange} />
        <input name="createdAt" placeholder="Data utworzenia" value={form.createdAt} onChange={handleChange} />
        <input name="updatedAt" placeholder="Data aktualizacji" value={form.updatedAt} onChange={handleChange} />
        <input name="lastLogin" placeholder="Ostatnie logowanie" value={form.lastLogin} onChange={handleChange} />
        <input name="lastActivity" placeholder="Ostatnia aktywność" value={form.lastActivity} onChange={handleChange} />
        <button type="button" onClick={() => setForm({ ...form, avatar: 'https://example.com/default-avatar.png' })}>
          🖼 Ustaw domyślny awatar
        </button>
        <button type="submit">💾 Zapisz zmiany</button>
      </form>
    </>
  );
};

export default UserEditForm;

