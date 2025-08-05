import { useState } from 'react';

const ChangePasswordForm = ({ userId }) => {
  const [oldPass, setOldPass] = useState('');
  const [newPass, setNewPass] = useState('');
  const [confirm, setConfirm] = useState('');

  const handleChange = async (e) => {
    e.preventDefault();

    if (newPass !== confirm) return alert('Hasła nie są identyczne!');

    const res = await fetch(`http://localhost:4000/api/users/${userId}/password`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('token')}`
      },
      body: JSON.stringify({ oldPassword: oldPass, newPassword: newPass })
    });

    if (res.ok) {
      alert('Hasło zmienione 🎉');
      setOldPass(''); setNewPass(''); setConfirm('');
    } else {
      alert('Błąd zmiany hasła ⛔');
    }
  };

  return (
    <form onSubmit={handleChange} style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
      <input type="password" placeholder="Stare hasło" value={oldPass} onChange={(e) => setOldPass(e.target.value)} />
      <input type="password" placeholder="Nowe hasło" value={newPass} onChange={(e) => setNewPass(e.target.value)} />
      <input type="password" placeholder="Powtórz nowe hasło" value={confirm} onChange={(e) => setConfirm(e.target.value)} />
      <button type="submit">🔐 Zmień hasło</button>
    </form>
  );
};

export default ChangePasswordForm;
// Usage: <ChangePasswordForm userId={currentUser.id} />
// Ensure you have the user ID available in the parent component where this form is used.
// This component allows users to change their password securely.
// It handles the form submission, checks if the new passwords match, and sends a request to the backend to update the password.
// Make sure to handle errors and success messages appropriately in your application.