const { generateText } = require("../services/textService");

const createText = async (req, res) => {
  try {
    const { prompt } = req.body;

    if (!prompt) {
      return res.status(400).json({ error: "Prompt is required" });
    }

    const text = await generateText(prompt);

    res.json({ text });

  } catch (error) {
    console.error("Text Error:", error);
    res.status(500).json({
      error: "Text generation failed",
    });
  }
};

module.exports = { createText };