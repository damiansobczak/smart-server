const express = require('express');
const router = express.Router();
const Statistics = require('../models/Statistics');

router.get('/', async (req, res) => {
    try {
        const statistics = await Statistics.find();
        res.json(statistics);
    } catch (err) {
        res.json({ message: err });
    }
});

router.post('/', async (req, res) => {
    const statistics = new Statistics({
        day: req.body.day,
        week: req.body.week,
        year: req.body.year,
        temperature: req.body.temperature,
        humidity: req.body.humidity,
        energy: req.body.energy
    });
    try {
        const savedStatistics = await statistics.save();
        res.json(savedStatistics);
    } catch (err) {
        res.json({ message: err });
    }
});

module.exports = router;
