const axios = require('axios');

// Business logic to handle Copilot AI interactions
const handleCopilotRequest = async (req, res) => {
  const { query } = req.body;

  if (!query) {
    return res.status(400).json({ error: 'Query cannot be empty' });
  }

  try {
    const response = await axios.post(
      'https://api.example-ai-provider.com/v1/copilot',
      { model: 'copilot-model', prompt: query },
      { headers: { Authorization: `Bearer ${process.env.COPILOT_API_KEY}` } }
    );

    res.json({ result: response.data.text });
  } catch (error) {
    console.error('Error calling Copilot API:', error.response ? error.response.data : error.message);
    res.status(500).json({ error: 'Failed to fetch response from Copilot', details: error.message });
  }
};

module.exports = { handleCopilotRequest };
