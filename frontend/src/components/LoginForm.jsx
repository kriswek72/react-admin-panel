import React, { useState } from 'react';

const LoginForm = ({ onLogin }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!email || !password) {
            setError('Please enter both email and password.');
            return;
        }
        setError('');
        if (onLogin) {
            onLogin({ email, password });
        }
    };

    return (
        <form onSubmit={handleSubmit} style={{ maxWidth: 400, margin: '0 auto' }}>
            <h2>Login</h2>
            {error && <div style={{ color: 'red', marginBottom: 10 }}>{error}</div>}
            <div style={{ marginBottom: 10 }}>
                <label>
                    Email:
                    <input
                        type="email"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        required
                        style={{ width: '100%', padding: 8, marginTop: 4 }}
                    />
                </label>
            </div>
            <div style={{ marginBottom: 10 }}>
                <label>
                    Password:
                    <input
                        type="password"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        required
                        style={{ width: '100%', padding: 8, marginTop: 4 }}
                    />
                </label>
            </div>
            <button type="submit" style={{ width: '100%', padding: 10 }}>
                Login
            </button>
        </form>
    );
};

export default LoginForm;