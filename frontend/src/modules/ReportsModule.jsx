// src/modules/ReportsModule.jsx
import { useState } from 'react';

const defaultReportsModule = () => {
    return {
        id: 'default',
        name: 'Default Report',
        description: 'This is the default report module.',
        reports: []
    };
};

const ReportsModule = () => {
    const [reportsModule, setReportsModule] = useState(defaultReportsModule());

    return (
        <div>
            <h2>📄 Moduł raportów</h2>
            <p>Witaj w panelu zarządzania raportami.</p>
            <div>
                <h3>Dodaj nowy raport</h3>
                <input
                    type="text"
                    name="id"
                    placeholder="ID raportu"
                    value={reportsModule.id}
                    onChange={(e) => setReportsModule({ ...reportsModule, id: e.target.value })}
                />
                <input
                    type="text"
                    name="name"
                    placeholder="Nazwa raportu"
                    value={reportsModule.name}
                    onChange={(e) => setReportsModule({ ...reportsModule, name: e.target.value })}
                />
                <input
                    type="text"
                    name="description"
                    placeholder="Opis"
                    value={reportsModule.description}
                    onChange={(e) => setReportsModule({ ...reportsModule, description: e.target.value })}
                />
                <button onClick={() => setReportsModule({ ...reportsModule, reports: [...reportsModule.reports, { id: reportsModule.id, name: reportsModule.name, description: reportsModule.description }] })}>➕ Dodaj raport</button>
            </div>
            <div>
                <h3>Aktualne raporty</h3>
                <ul>
                    {reportsModule.reports.map((report) => (
                        <li key={report.id}>
                            {report.name} - {report.description}
                            <button onClick={() => setReportsModule({ ...reportsModule, reports: reportsModule.reports.filter((r) => r.id !== report.id) })}>🗑️ Usuń</button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default ReportsModule;
