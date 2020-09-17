const mongoose = require('mongoose');

const MachineSchmea = mongoose.Schema({
    energy: String,
    warranty: String,
    working: String,
    service: String
});

module.exports = mongoose.model('Machine', MachineSchmea);