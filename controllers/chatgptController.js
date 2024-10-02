const axios = require('axios');

// Business logic to handle ChatGPT AI interactions
const handleChatGPTRequest = async (req, res) => {
  const { query } = req.body;

  if (!query) {
    return res.status(400).json({ error: 'Query cannot be empty' });
  }

  try {
    const response = await axios.post(
      'https://api.openai.com/v1/chat/completions',
      {
        model: 'gpt-3.5-turbo',
        messages: [{ role: 'user', content: query }],
      },
      {
        headers: { Authorization: `Bearer ${process.env.OPENAI_API_KEY}` },
      }
    );

    res.json({ result: response.data.choices[0].message.content });
  } catch (error) {
    console.error('Error calling ChatGPT API:', error.response ? error.response.data : error.message);
    res.status(500).json({ error: 'Failed to fetch response from ChatGPT', details: error.message });
  }
};

module.exports = { handleChatGPTRequest };
