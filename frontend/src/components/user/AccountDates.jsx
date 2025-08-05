// daty utworzenia, logowania, aktualizacji
import React from 'react';
import { useAuth } from '../../context/AuthContext';

const AccountDates = () => {
  const { user } = useAuth();

  return (
    <div>
      <h3>Daty</h3>
      <ul>
        <li>Data utworzenia: {user.createdAt || 'Brak danych'}</li>
        <li>Data logowania: {user.lastLogin || 'Brak danych'}</li>
        <li>Data aktualizacji: {user.updatedAt || 'Brak danych'}</li>
      </ul>
    </div>
  );
};

export default AccountDates;
// Usage: <AccountDates />
// Ensure you have the user object available in the context.
// This component displays the user's creation, login, and update dates.
// It uses the `useAuth` hook to access the current user's data.
// You can format the dates as needed, e.g., using `new Date(user.createdAt).toLocaleString()` for better readability.
// This component is designed to be used in a user management system, specifically in a user account dates section.
// It displays the creation date, last login date, and last update date of the user account.
// To use this component, you would typically import it into a parent component where user account dates are displayed, passing the user object as a prop.
// Usage: <AccountDates />