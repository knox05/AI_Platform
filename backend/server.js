require("dotenv").config();

const express = require("express");
const cors = require("cors");

const imageRoutes = require("./routes/imageRoutes");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Backend is running 🚀");
});

// ✅ Use routes
app.use("/api", imageRoutes);

app.listen(5000, () => {
  console.log("Server running on port 5000");
});

console.log("HF KEY LOADED:", process.env.HF_API_KEY ? "YES" : "NO");