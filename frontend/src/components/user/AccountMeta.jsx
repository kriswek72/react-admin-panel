// notatki, avatar, info dodatkowe
import React from 'react';
import { useAuth } from '../../context/AuthContext';

const AccountMeta = () => {
  const { user } = useAuth();

  return (
    <div>
      <h3>Notatki</h3>
      <p>{user.notes || 'Brak notatek'}</p>

      <h3>Avatar</h3>
      <img src={user.avatar || 'default-avatar.png'} alt="Avatar" />

      <h3>Informacje dodatkowe</h3>
      <p>{user.additionalInfo || 'Brak informacji dodatkowych'}</p>
    </div>
  );
};

export default AccountMeta;
// Usage: <AccountMeta />
// Ensure you have the user object available in the context.
// This component displays the user's notes, avatar, and additional information.
// It uses the `useAuth` hook to access the current user's data.