const express = require('express');
const router = express.Router();
const Temperature = require('../models/Temperature');

router.get('/', async (req, res) => {
    try {
        const temperature = await Temperature.find();
        res.json(temperature);
    } catch (err) {
        res.json({ message: err });
    }
});

router.post('/', async (req, res) => {
    const temperature = new Temperature({
        temperature: req.body.temperature,
        date: req.body.date
    });
    try {
        const savedTemperature = await temperature.save();
        res.json(savedTemperature);
    } catch (err) {
        res.json({ message: err });
    }
});

module.exports = router;