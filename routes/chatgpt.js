const express = require('express');
const { handleChatGPTRequest } = require('../controllers/chatgptController');
const router = express.Router();

router.post('/', handleChatGPTRequest);

module.exports = router;
