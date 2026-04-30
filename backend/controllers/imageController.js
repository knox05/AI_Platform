const { generateImage } = require("../services/hfService");

const createImage = async (req, res) => {
  try {
    const { prompt } = req.body;

    if (!prompt) {
      return res.status(400).json({ error: "Prompt is required" });
    }

    const image = await generateImage(prompt);

    res.json({
        image: `data:image/png;base64,${image}`,
    });

  } catch (error) {
    console.error("Image Error:", error);
    res.status(500).json({
      error: "Image generation failed",
    });
  }
};

module.exports = { createImage };