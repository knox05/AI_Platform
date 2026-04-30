const axios = require("axios");

const generateImage = async (prompt) => {
  const url = `https://image.pollinations.ai/prompt/${encodeURIComponent(prompt)}`;

  const response = await axios.get(url, {
    responseType: "arraybuffer",
  });

  const base64 = Buffer.from(response.data).toString("base64");

  return base64;
};

module.exports = { generateImage };