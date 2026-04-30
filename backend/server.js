require("dotenv").config();

const express = require("express");
const cors = require("cors");

const imageRoutes = require("./routes/imageRoutes");
const textRoutes = require("./routes/textRoutes");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Backend is running 🚀");
});

// ✅ Use routes
app.use("/api", imageRoutes);
app.use("/api", textRoutes);

app.listen(5000, () => {
  console.log("Server running on port 5000");
});

console.log("HF KEY LOADED:", process.env.HF_API_KEY ? "YES" : "NO");