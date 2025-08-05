import { useState } from 'react';

const defaultPermissionModule = () => {
    // Placeholder for default permission module data
    return {
        id: 'default',
        name: 'Default Permission',
        description: 'This is the default permission module.',
        permissions: []
    };
};

const PermissionModule = () => {
    const [permissionModule, setPermissionModule] = useState(defaultPermissionModule());
    const [newPermission, setNewPermission] = useState({
        id: '',
        name: '',
        description: '',
    });
    const handleAddPermission = () => {
        setPermissionModule((prev) => ({
            ...prev,
            permissions: [...prev.permissions, newPermission],
        }));
        setNewPermission({
            id: '',
            name: '',
            description: '',
        });
    };
    const handleChange = (e) => {
        const { name, value } = e.target;
        setNewPermission((prevPermission) => ({
            ...prevPermission,
            [name]: value,
        }));
    };
    const handleResetPermission = () => {
        setPermissionModule(defaultPermissionModule());
    };
    const handleDeletePermission = (id) => {
        setPermissionModule((prev) => ({
            ...prev,
            permissions: prev.permissions.filter((perm) => perm.id !== id),
        }));
    };
    const handleEditPermission = (id) => {
        const permissionToEdit = permissionModule.permissions.find((perm) => perm.id === id);
        if (permissionToEdit) {
            setNewPermission(permissionToEdit);
        }
    };
    const handleUpdatePermission = () => {
        setPermissionModule((prev) => ({
            ...prev,
            permissions: prev.permissions.map((perm) =>
                perm.id === newPermission.id ? newPermission : perm
            ),
        }));
        setNewPermission({
            id: '',
            name: '',
            description: '',
        });
    };
    const handleClearPermission = () => {
        setPermissionModule(defaultPermissionModule());
        setNewPermission({
            id: '',
            name: '',
            description: '',
        });
    };
    const handleSavePermission = () => {
        localStorage.setItem('permissions', JSON.stringify(permissionModule.permissions));
    };
    return (
        <div>
            <h2>👮‍♂️Permission 🔐 Module 🔑</h2>
            <p>Welcome to the Permission management panel.</p>
            <div>
                <input
                    type="text"
                    name="id"
                    placeholder="Permission ID"
                    value={newPermission.id}
                    onChange={handleChange}
                />
                <input
                    type="text"
                    name="name"
                    placeholder="Permission Name"
                    value={newPermission.name}
                    onChange={handleChange}
                />
                <input
                    type="text"
                    name="description"
                    placeholder="Description"
                    value={newPermission.description}
                    onChange={handleChange}
                />
                <button onClick={handleAddPermission}>➕ Add Permission</button>
            </div>
            <div>
                <button onClick={handleResetPermission}>🔄 Reset Permissions</button>
                <button onClick={handleClearPermission}>🗑️ Clear Permissions</button>
                <button onClick={handleSavePermission}>💾 Save Permissions</button>
            </div>
            <ul>
                {permissionModule.permissions.map((perm) => (
                    <li key={perm.id}>
                        {perm.name} - {perm.description}
                        <button onClick={() => handleEditPermission(perm.id)}>✏️ Edit</button>
                        <button onClick={() => handleDeletePermission(perm.id)}>🗑️ Delete</button>
                    </li>
                ))}
            </ul>
            {newPermission.id && (
                <div>
                    <h3>Edit Permission</h3>
                    <input
                        type="text"
                        name="id"
                        placeholder="Permission ID"
                        value={newPermission.id}
                        onChange={handleChange}
                    />
                    <input
                        type="text"
                        name="name"
                        placeholder="Permission Name"
                        value={newPermission.name}
                        onChange={handleChange}
                    />
                    <input
                        type="text"
                        name="description"
                        placeholder="Description"
                        value={newPermission.description}
                        onChange={handleChange}
                    />
                    <button onClick={handleUpdatePermission}>💾 Update Permission</button>
                </div>
            )}
            <div>
                <h3>Add New Permission</h3>
                <input
                    type="text"
                    name="id"
                    placeholder="Permission ID"
                    value={newPermission.id}
                    onChange={handleChange}
                />
                <input
                    type="text"
                    name="name"
                    placeholder="Permission Name"
                    value={newPermission.name}
                    onChange={handleChange}
                />
                <input
                    type="text"
                    name="description"
                    placeholder="Description"
                    value={newPermission.description}
                    onChange={handleChange}
                />
                <button onClick={handleAddPermission}>➕ Add Permission</button>
            </div>
            <div>
                <h3>Current Permissions</h3>
                <ul>
                    {permissionModule.permissions.map((perm) => (
                        <li key={perm.id}>
                            {perm.name} - {perm.description}
                            <button onClick={() => handleEditPermission(perm.id)}>✏️ Edit</button>
                            <button onClick={() => handleDeletePermission(perm.id)}>🗑️ Delete</button>
                        </li>
                    ))}
                </ul>
            </div>
            <div>
                <h3>All Permissions</h3>
                <ul>
                    {permissionModule.permissions.map((perm) => (
                        <li key={perm.id}>
                            {perm.name} - {perm.description}
                            <button onClick={() => handleEditPermission(perm.id)}>✏️ Edit</button>
                            <button onClick={() => handleDeletePermission(perm.id)}>🗑️ Delete</button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default PermissionModule;
// This module serves as a placeholder for the Permission section of the admin panel.
// It can be expanded with features like managing permissions, roles, and access control.