const axios = require("axios");

const generateSpeech = async (text) => {
  try {
    console.log("🔊 Generating speech...");

    const response = await axios({
      method: "POST",
      url: `https://api.elevenlabs.io/v1/text-to-speech/${process.env.ELEVEN_VOICE_ID}`,
      headers: {
        "xi-api-key": process.env.ELEVEN_API_KEY,
        "Content-Type": "application/json",
        "Accept": "audio/mpeg", // 🔥 IMPORTANT
      },
      data: {
        text: text,
        model_id: "eleven_multilingual_v2", // ✅ better + supported
      },
      responseType: "arraybuffer",
      timeout: 60000,
    });

    const contentType = response.headers["content-type"];
    console.log("Content-Type:", contentType);

    // ❌ If API didn't return audio
    if (!contentType || !contentType.includes("audio")) {
      console.log("❌ Non-audio response:");
      console.log(response.data.toString());
      throw new Error("Invalid audio response");
    }

    // ✅ Convert to base64
    const base64 = Buffer.from(response.data).toString("base64");

    return `data:audio/mpeg;base64,${base64}`;

  } catch (error) {
    console.error("❌ TTS Error:");

    if (error.response) {
      console.error(error.response.data.toString());
    } else {
      console.error(error.message);
    }

    throw new Error("Speech generation failed");
  }
};

module.exports = { generateSpeech };