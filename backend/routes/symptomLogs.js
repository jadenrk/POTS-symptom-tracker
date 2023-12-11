const express = require('express');
const {
    getSymptomLogs,
    getSymptomLogByID,
    createSymptomLog,
    deleteSymptomLog,
    updateSymptomLog
} = require ('../controllers/symptomLogController');
const requireAuth = require('../middleware/requireAuth');

const router = express.Router();

// require auth for all symptom log routes
router.use(requireAuth);

router.get('/', getSymptomLogs);

router.get('/:id', getSymptomLogByID);

router.post('/', createSymptomLog);

router.delete('/:id', deleteSymptomLog);

router.patch('/:id', updateSymptomLog);

module.exports = router;