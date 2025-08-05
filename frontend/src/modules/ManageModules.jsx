import { useState } from 'react';

const defaultModules = JSON.parse(localStorage.getItem('modules')) || [];

const ManageModules = () => {
  const [modules, setModules] = useState(defaultModules);
  const [newModule, setNewModule] = useState({
    name: '',
    path: '',
    permission: '',
    component: '',
  });

  const handleChange = (e) => {
    setNewModule({ ...newModule, [e.target.name]: e.target.value });
  };

  const handleAdd = () => {
    const updated = [...modules, newModule];
    setModules(updated);
    localStorage.setItem('modules', JSON.stringify(updated));
    setNewModule({ name: '', path: '', permission: '', component: '' });
  };

  return (
    <div>
      <h2>🧩 Zarządzaj modułami 🔧</h2>

      <div style={{ margin: '1rem 0' }}>
        <input name="name" placeholder="Nazwa modułu" value={newModule.name} onChange={handleChange} />
        <input name="path" placeholder="Ścieżka (np. /finanse)" value={newModule.path} onChange={handleChange} />
        <input name="permission" placeholder="Uprawnienie (np. finance)" value={newModule.permission} onChange={handleChange} />
        <input name="component" placeholder="Nazwa komponentu (np. FinanceModule)" value={newModule.component} onChange={handleChange} />
        <button onClick={handleAdd}>➕ Dodaj moduł</button>
      </div>

      <ul>
        {modules.map((mod, i) => (
          <li key={i}>
            <strong>{mod.name}</strong> ({mod.path}) – <code>{mod.permission}</code> → {mod.component}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ManageModules;
