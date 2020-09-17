const express = require('express');
const router = express.Router();
const Machine = require('../models/Machine');

router.get('/', async (req, res) => {
    try {
        const machine = await Machine.find();
        res.json(machine);
    } catch (err) {
        res.json({ message: err });
    }
});

router.post('/', async (req, res) => {
    const machine = new Machine({
        energy: req.body.energy,
        warranty: req.body.warranty,
        working: req.body.working,
        service: req.body.service
    });
    try {
        const savedMachine = await machine.save();
        res.json(savedMachine);
    } catch (err) {
        res.json({ message: err });
    }
});

module.exports = router;