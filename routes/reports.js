const express = require('express');
const router = express.Router();
const Reports = require('../models/Reports');

router.get('/', async (req, res) => {
    try {
        const reports = await Reports.find();
        res.json(reports);
    } catch (err) {
        res.json({ message: err });
    }
});

router.post('/', async (req, res) => {
    const reports = new Reports({
        quarter: req.body.quarter,
        savedEnergy: req.body.savedEnergy,
        savedMoney: req.body.savedMoney
    });
    try {
        const savedReports = await reports.save();
        res.json(savedReports);
    } catch (err) {
        res.json({ message: err });
    }
});

module.exports = router;