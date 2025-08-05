const Unauthorized = () => (
  <div style={{
    textAlign: 'center',
    padding: '2rem',
    color: '#dc3545',
    fontSize: '1.2rem'
  }}>
    <h1>🚫 Brak dostępu</h1>
    <p>Nie masz wymaganych uprawnień, aby zobaczyć tę stronę.</p>
    <a href="/" style={{
      color: '#007bff',
      textDecoration: 'underline',
      marginTop: '1rem',
      display: 'inline-block'
    }}>⬅️ Wróć do strony głównej</a>
  </div>
);

export default Unauthorized;
// This component is displayed when a user tries to access a page they are not authorized to view.
// It informs the user that they do not have the necessary permissions and suggests contacting the system administrator.
// You can customize the message or add additional information as needed.