const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//userID, logDate, dizziness, palpitations, chestPain, preSyncope, brainfog, dyspnea, gastrointestinal, fatigue, nausea, musclePain, headache, insomnia, notes

const symptomLogSchema = new Schema({
    logDate: {
        type: Date,
        required: true,
        default: Date.now
    },
    dizziness: {
        type: Number,
        default: 0
    },
    palpitations: {
        type: Number,
        default: 0
    },
    chestPain: {
        type: Number,
        default: 0
    },
    preSyncope: {
        type: Number,
        default: 0
    },
    brainfog: {
        type: Number,
        default: 0
    },
    dyspnea: {
        type: Number,
        default: 0
    },
    gastrointestinal: {
        type: Number,
        default: 0
    },
    fatigue: {
        type: Number,
        default: 0
    },
    nausea: {
        type: Number,
        default: 0
    },
    musclePain: {
        type: Number,
        default: 0
    },
    headache: {
        type: Number,
        default: 0
    },
    insomnia: {
        type: Number,
        default: 0
    },
    notes: {
        type: String
    },
    userID: {
        type: String,
        required: true
    }
}, { timestamps: true });

module.exports = mongoose.model('SymptomLog', symptomLogSchema);