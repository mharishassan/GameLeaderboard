// backend/models/leaderboard.js
const mongoose = require('mongoose');

const leaderboardSchema = new mongoose.Schema({
    Rank: {
        type: Number,
        required: true
    },
    Name: {
        type: String,
        required: true
    },
    Games: {
        type: Number,
        required: true
    },
    Score: {
        type: Number,
        required: true
    }
});

const Leaderboard = mongoose.model('Leaderboard', leaderboardSchema);

module.exports = Leaderboard;