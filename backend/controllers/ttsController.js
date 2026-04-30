const { generateSpeech } = require("../services/ttsService");

const createSpeech = async (req, res) => {
  try {
    const { text } = req.body;

    if (!text) {
      return res.status(400).json({ error: "Text is required" });
    }

    const audio = await generateSpeech(text);

    res.json({ audio });

  } catch (error) {
    console.error("TTS Error:", error);
    res.status(500).json({
      error: "Speech generation failed",
    });
  }
};

module.exports = { createSpeech };