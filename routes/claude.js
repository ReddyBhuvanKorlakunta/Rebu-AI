const express = require('express');
const { handleClaudeRequest } = require('../controllers/claudeController');
const router = express.Router();

router.post('/', handleClaudeRequest);

module.exports = router;
