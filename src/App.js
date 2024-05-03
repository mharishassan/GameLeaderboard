// frontend/src/App.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Leaderboard from './components/leaderboard';
import './App.css';

const App = () => {
    const [leaderboardData, setLeaderboardData] = useState([]);

    useEffect(() => {
        const fetchLeaderboardData = async () => {
            try {
                const response = await axios.get('http://localhost:3000/api/leaderboard');
                setLeaderboardData(response.data);
            } catch (error) {
                console.error('Error fetching leaderboard data:', error);
            }
        };

        fetchLeaderboardData();
    }, []);

    return (
        <div className="app-container">
            <div className="leaderboard-wrapper">
                <Leaderboard data={leaderboardData} />
            </div>
        </div>
    );
};

export default App;
