const express = require('express');
const { handleGeminiRequest } = require('../controllers/geminiController');
const router = express.Router();

router.post('/', handleGeminiRequest);

module.exports = router;
