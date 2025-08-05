import { useEffect, useState } from 'react';

const ActivityList = ({ userId }) => {
  const [logs, setLogs] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:4000/api/users/${userId}/logs`, {
      headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
    })
      .then(res => res.json())
      .then(setLogs);
  }, [userId]);

  return (
    <div>
      <h3>📓 Historia aktywności</h3>
      <ul>
        {logs.map(log => (
          <li key={log.id}>
            {new Date(log.created_at).toLocaleString()} – {log.action}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ActivityList;
// Usage: <ActivityList userId={currentUser.id} />
// Ensure you have the user ID available in the parent component where this list is used.
// This component fetches and displays the activity logs for a specific user.
// It uses the user ID to make a request to the backend and retrieves the logs, which are then displayed in a list format.
// Make sure to handle loading states and errors appropriately in your application.