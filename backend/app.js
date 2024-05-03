const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const leaderboardRouter = require('./routes/leaderboard');

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect('mongodb+srv://harishassan2001:Qwerty2001@db1.ksujqci.mongodb.net/?retryWrites=true&w=majority&appName=Db1', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
    console.log('Connected to MongoDB');
});

app.use('/api/leaderboard', leaderboardRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
