const mongoose = require('mongoose');

const TemperatureSchema = mongoose.Schema({
    temperature: String,
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Temperature', TemperatureSchema);
