const mongoose = require('mongoose');

const StatisticsSchema = mongoose.Schema({
    day: String,
    week: String,
    year: String,
    temperature: String,
    humidity: String,
    energy: String
});

module.exports = mongoose.model('Statistics', StatisticsSchema);
