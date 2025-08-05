// uprawnienia
import React from 'react';
import { useAuth } from '../../context/AuthContext';

const AccountPermissions = () => {
  const { user } = useAuth();

  return (
    <div>
      <h3>Uprawnienia</h3>
      <ul>
        {user.permissions && user.permissions.length > 0 ? (
          user.permissions.map((permission, index) => (
            <li key={index}>{permission}</li>
          ))
        ) : (
          <>
            <li>Brak uprawnień</li>
            <li><button>Dodaj uprawnienia</button></li>
            
          </>
        )}
      </ul>
      <button>Dodaj uprawnienia</button>
    </div>
  );
};

export default AccountPermissions;
// Usage: <AccountPermissions />
// Ensure you have the user object available in the context.
// This component displays the user's permissions.
// It uses the `useAuth` hook to access the current user's data.