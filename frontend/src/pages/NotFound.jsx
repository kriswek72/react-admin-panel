import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => (
    <div style={{ textAlign: 'center', marginTop: '10vh' }}>
        <h1>404</h1>
        <h2>🔍 Nie znaleziono strony 😒</h2>
        <p>Przepraszamy, taka strona nie istnieje.</p>
        <Link to="/">Powrót na stronę główną</Link>
    </div>
);

export default NotFound;