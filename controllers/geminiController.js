const axios = require('axios');

// Business logic to handle Gemini AI interactions
const handleGeminiRequest = async (req, res) => {
  const { query } = req.body;

  if (!query) {
    return res.status(400).json({ error: 'Query cannot be empty' });
  }

  try {
    const response = await axios.post(
      'https://api.example-ai-provider.com/v1/gemini',
      { model: 'gemini-model', prompt: query },
      { headers: { Authorization: `Bearer ${process.env.GEMINI_API_KEY}` } }
    );

    res.json({ result: response.data.text });
  } catch (error) {
    console.error('Error calling Gemini API:', error.response ? error.response.data : error.message);
    res.status(500).json({ error: 'Failed to fetch response from Gemini', details: error.message });
  }
};

module.exports = { handleGeminiRequest };
