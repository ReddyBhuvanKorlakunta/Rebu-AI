const express = require('express');
const cors = require('cors');
require('dotenv').config();  // Load environment variables from .env file

const app = express();
app.use(cors());
app.use(express.json());

// Define Routes
const chatgptRoute = require('./routes/chatgpt');
const claudeRoute = require('./routes/claude');
const copilotRoute = require('./routes/copilot');
const geminiRoute = require('./routes/gemini');

app.use('/api/chatgpt', chatgptRoute);
app.use('/api/claude', claudeRoute);
app.use('/api/copilot', copilotRoute);
app.use('/api/gemini', geminiRoute);

// Start the server using the PORT value from the .env file
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
