import { useState } from 'react';

const defaultStatisticsModule = () => {
    // Placeholder for default statistics module data
    return {
        totalUsers: 0,
        activeUsers: 0,
        userGrowth: 0,
    };
};

const StatisticsModule = () => {
    const [statistics, setStatistics] = useState(defaultStatisticsModule());
    const [newStatistics, setNewStatistics] = useState({
        totalUsers: '',
        activeUsers: '',
        userGrowth: '',
    });
    const handleAddStatistics = () => {
        setStatistics(newStatistics);
        setNewStatistics({
            totalUsers: '',
            activeUsers: '',
            userGrowth: '',
        });
    };  
    const handleChange = (e) => {
        const { name, value } = e.target;
        setNewStatistics((prevStats) => ({
            ...prevStats,
            [name]: value,
        }));
    };
    
    const handleClearStatisticsData = () => {
        setStatistics(defaultStatisticsModule());
        setNewStatistics({
            totalUsers: '',
            activeUsers: '',
            userGrowth: '',
        });
    };
    const handleSaveStatistics = () => {
        localStorage.setItem('statistics', JSON.stringify(statistics));
    };
    return (
        <div>
            <h2>📊 Statystyki</h2>
            {/* Add your statistics components or charts here */}
            <p>Brak dostępnych danych statystycznych.</p>
            <div>
                <input
                    type="number"
                    name="totalUsers"
                    placeholder="Łączna liczba użytkowników"
                    value={newStatistics.totalUsers}
                    onChange={handleChange}
                />
                <input
                    type="number"
                    name="activeUsers"
                    placeholder="Aktywni użytkownicy"
                    value={newStatistics.activeUsers}
                    onChange={handleChange}
                />
                <input
                    type="number"
                    name="userGrowth"
                    placeholder="Wzrost użytkowników (%)"
                    value={newStatistics.userGrowth}
                    onChange={handleChange}
                />
                <button onClick={handleAddStatistics}>➕ Dodaj statystyki</button>
                <button onClick={handleClearStatisticsData}>🗑️ Wyczyść dane statystyk</button>
            </div>
            <button onClick={handleSaveStatistics}>💾 Zapisz statystyki</button>
        </div>
    );
};

export default StatisticsModule;
