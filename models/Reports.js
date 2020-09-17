const mongoose = require('mongoose');

const ReportsSchema = mongoose.Schema({
    quarter: String,
    savedEnergy: String,
    savedMoney: String
});

module.exports = mongoose.model('Reports', ReportsSchema);