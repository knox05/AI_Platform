const express = require("express");
const router = express.Router();

const { createText } = require("../controllers/textController");

router.post("/generate-text", createText);

module.exports = router;