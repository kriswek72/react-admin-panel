// język, strefa czasowa, status
import React from 'react';
import { useAuth } from '../../context/AuthContext';

const AccountRegional = () => {
  const { user } = useAuth();

  return (
    <div>
      <h3>Region</h3>
      <ul>
        <li>Język: {user.language || 'Brak danych'}</li>
        <li>Strefa czasowa: {user.timezone || 'Brak danych'}</li>
        <li>Status: {user.status || 'Brak danych'}</li>
      </ul>
    </div>
  );
};

export default AccountRegional;
// Usage: <AccountRegional />
// Ensure you have the user object available in the context.
// This component displays the user's language, timezone, and status.
// It uses the `useAuth` hook to access the current user's data.
// This component is designed to be used in a user management system, specifically in a user account settings tab.
// It displays the user's language, timezone, and account status in a structured format.    
// The component uses the `useAuth` hook to access the current user's data from the context.
// To use this component, you would typically import it into a parent component where user account settings are displayed, ensuring that the user object is available in the context.
// Usage: <AccountRegional />