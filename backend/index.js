const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const { connect } = require("./config/database");

// Load environment variables
dotenv.config();

// Connect to MongoDB
connect();

// Create Express app
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
const authRoutes = require("./routes/auth");
app.use("/api/auth", authRoutes);

// Port setup
const PORT = process.env.PORT || 5000;

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
