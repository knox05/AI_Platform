const axios = require("axios");

const generateText = async (prompt) => {
  const url = `https://text.pollinations.ai/${encodeURIComponent(prompt)}`;

  const response = await axios.get(url);

  return response.data;
};

module.exports = { generateText };