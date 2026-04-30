const express = require("express");
const router = express.Router();

const { createSpeech } = require("../controllers/ttsController");

router.post("/generate-speech", createSpeech);

module.exports = router;