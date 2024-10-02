const axios = require('axios');

// Business logic to handle Claude AI interactions
const handleClaudeRequest = async (req, res) => {
  const { query } = req.body;

  if (!query) {
    return res.status(400).json({ error: 'Query cannot be empty' });
  }

  try {
    const response = await axios.post(
      'https://api.example-ai-provider.com/v1/claude',
      { model: 'claude-model', prompt: query },
      { headers: { Authorization: `Bearer ${process.env.CLAUDE_API_KEY}` } }
    );

    res.json({ result: response.data.text });
  } catch (error) {
    console.error('Error calling Claude API:', error.response ? error.response.data : error.message);
    res.status(500).json({ error: 'Failed to fetch response from Claude', details: error.message });
  }
};

module.exports = { handleClaudeRequest };
