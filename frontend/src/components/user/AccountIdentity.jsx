// avatar, username, id
import React from 'react';
import { useAuth } from '../../context/AuthContext';

const AccountIdentity = () => {
  const { user } = useAuth();

  return (
    <div>
      <h3>Tożsamość</h3>
      <ul>
        <li>Avatar: <img src={user.avatar || 'default-avatar.png'} alt="Avatar" /></li>
        <li>Nazwa użytkownika: {user.username || 'Brak danych'}</li>
        <li>ID: {user.id || 'Brak danych'}</li>
      </ul>
    </div>
  );
};

export default AccountIdentity;
// Usage: <AccountIdentity />
// Ensure you have the user object available in the context.
// This component displays the user's avatar, username, and ID.
// It uses the `useAuth` hook to access the current user's data.
// This component is designed to be used in a user management system, specifically in a user account settings tab.
// It displays the user's avatar, username, and ID in a structured format.
// The component uses the `useAuth` hook to access the current user's data from the context.
// To use this component, you would typically import it into a parent component where user account settings are displayed, ensuring that the user object is available in the context.
// Usage: <AccountIdentity />