import { useState } from 'react';

const defaultUsers = JSON.parse(localStorage.getItem('users')) || [];

const UsersModule = () => {
    const [users, setUsers] = useState(defaultUsers);
    const [newUser, setNewUser] = useState({
        username: '',
        email: '',
        role: '',
        status: '',
        createdAt: '',
        updatedAt: '',
    });

    const handleAddUser = () => {
        const userWithId = { id: Date.now(), ...newUser };
        setUsers([...users, userWithId]);
        localStorage.setItem('users', JSON.stringify([...users, userWithId]));
        setNewUser({
            username: '',
            email: '',
            role: '',
            status: '',
            createdAt: '',
            updatedAt: '',
        });
    };

    const handleEditUser = (userId, updatedUser) => {
        setUsers(users.map(user => (user.id === userId ? updatedUser : user)));
    };

    const handleDeleteUser = (userId) => {
        setUsers(users.filter(user => user.id !== userId));
    };

    return (
        <section>
            <h2>👤 Moduł użytkowników</h2>
            {/* Tutaj możesz dodać funkcjonalności zarządzania użytkownikami */}
            <div>
                <input
                    type="text"
                    placeholder="Nazwa użytkownika"
                    value={newUser.username}
                    onChange={(e) => setNewUser({ ...newUser, username: e.target.value })}
                />
                <input
                    type="email"
                    placeholder="Email"
                    value={newUser.email}
                    onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
                />
                <input
                    type="text"
                    placeholder="Rola"
                    value={newUser.role}
                    onChange={(e) => setNewUser({ ...newUser, role: e.target.value })}
                />
                <input
                    type="text"
                    placeholder="Status"
                    value={newUser.status}
                    onChange={(e) => setNewUser({ ...newUser, status: e.target.value })}
                />
                <button onClick={handleAddUser}>➕ Dodaj użytkownika</button>
            </div>
            <ul>
                {users.map((user) => (
                    <li key={user.id}>
                        <strong>{user.username}</strong> ({user.email}) - {user.role} - {user.status}
                        <button onClick={() => handleEditUser(user.id, { ...user, status: 'Zaktualizowany' })}>✏️ Edytuj</button>
                        <button onClick={() => handleDeleteUser(user.id)}>🗑 Usuń</button>
                    </li>
                ))}

            </ul>
        </section>
    );
};

export default UsersModule;

// This module can be expanded to include user management functionalities such as creating, editing, and deleting users.
// It can also include user roles and permissions management.