import { useState } from 'react';

const defaultRoles = JSON.parse(localStorage.getItem('roles')) || [];
    const Role = () => {
    const [role, setRole] = useState(defaultRoles);
    const [newRole, setNewRole] = useState({
        name: '',
        permissions: [],
    });
    

    const handleChange = (e) => {
        setNewRole({ ...newRole, [e.target.name]: e.target.value });        
    };

    const handleAdd = () => {
        const updated = [...role, newRole];
        setRole(updated);
        localStorage.setItem('roles', JSON.stringify(updated));
        setNewRole({ name: '', permissions: [] });
    };
    const handleDelete = (index) => {
        const updated = role.filter((_, i) => i !== index);
        setRole(updated);
        localStorage.setItem('roles', JSON.stringify(updated));
    };
    return (
        <div>
            <h2>👤Role</h2>
            <p>Lista dostępnych ról w systemie.</p>
            <div style={{ margin: '1rem 0' }}>
                <input name="name" placeholder="Nazwa roli" value={newRole.name} onChange={handleChange} />
                <button onClick={handleAdd}>➕ Dodaj rolę</button>
            </div>
            <div>
                {role.map((role, index) => (
                    <div key={index}>
                        <strong>{role.name}</strong> – {role.permissions.join(', ')}
                        <button style={{ marginLeft: '1rem' }} onClick={() => handleDelete(index)}>
                            🗑 Usuń
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Role;
