const express = require('express');
const { handleCopilotRequest } = require('../controllers/copilotController');
const router = express.Router();

router.post('/', handleCopilotRequest);

module.exports = router;
