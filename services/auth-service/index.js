const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const { connect } = require("./config/database");

dotenv.config();

const app = express();

// Middleware
app.use(express.json());
app.use(cors());
app.use(cookieParser());

// Routes
app.use("/api/v1/auth", require("./routes/Userr"));

// Health check — Docker ke liye important hai
app.get("/health", (req, res) => {
  res.json({ status: "Auth Service Running" });
});

const PORT = process.env.PORT || 4001;

// DB connect karke server start karo
connect().then(() => {
  app.listen(PORT, () => {
    console.log(`Auth Service running on port ${PORT}`);
  });
});