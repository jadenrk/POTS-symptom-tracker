const SymptomLog = require('../models/symptomLogModel');
const mongoose = require('mongoose');

// get all logs
const getSymptomLogs = async (req, res) => {
    const userID = req.user._id;
    const symptomLogs = await SymptomLog.find({userID }).sort({createdAt: -1}); //descending
    res.status(200).json(symptomLogs);
}

// get single log
const getSymptomLogByID = async (req, res) => {
    const { id } = req.params;

    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: 'No such log' })
    } 

    const symptomLog = await SymptomLog.findById(id);

    if(!symptomLog) {
        return res.status(404).json({error: 'No such log'});
    }

    res.status(200).json(symptomLog);
}

// create new log
const createSymptomLog = async (req, res) => {
    const { 
        logDate,
        dizziness, 
        palpitations, 
        chestPain, 
        preSyncope, 
        brainfog, 
        dyspnea, 
        gastrointestinal, 
        fatigue, 
        nausea, 
        musclePain, 
        headache, 
        insomnia,
        notes
    } = req.body;
    
    if (!logDate) {
        return res.status(400).json({ error: 'Please choose a date' });
    }

    try {
        const userID = req.user._id;
        const symptomLog = await SymptomLog.create({
            userID, 
            logDate,
            dizziness, 
            palpitations, 
            chestPain, 
            preSyncope, 
            brainfog, 
            dyspnea, 
            gastrointestinal, 
            fatigue, 
            nausea, 
            musclePain, 
            headache, 
            insomnia,
            notes
        });
        res.status(200).json(symptomLog);
    } catch (err) {
        res.status(400).json({error: err.message});
    }
}

// delete existing log
const deleteSymptomLog = async (req, res) => {
    const { id } = req.params;

    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: 'No such log' })
    } 

    const symptomLog = await SymptomLog.findOneAndDelete({ _id: id });

    if(!symptomLog) {
        return res.status(404).json({error: 'No such log'});
    }

    res.status(200).json(symptomLog);
}

// update existing log
const updateSymptomLog = async (req, res) => {
    const { id } = req.params;

    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: 'No such log' })
    } 

    const symptomLog = await SymptomLog.findOneAndUpdate({_id: id}, {
        ...req.body
    });

    if(!symptomLog) {
        return res.status(404).json({error: 'No such log'});
    }

    res.status(200).json(symptomLog);
}

module.exports = {
    getSymptomLogs, 
    getSymptomLogByID, 
    createSymptomLog,
    deleteSymptomLog,
    updateSymptomLog
}