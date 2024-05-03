// backend/routes/leaderboard.js
const express = require('express');
const router = express.Router();
const Leaderboard = require('../models/leaderboard');

router.get('/', async (req, res) => {
    try {
        const leaderboardData = await LeaderboardItem.find().sort({ Score: -1 });
        res.status(200).json(leaderboardData);
    } catch (error) {
        res.status(500).json({ message: 'Failed to retrieve leaderboard data', error: error.message });
    }
});

module.exports = router;
