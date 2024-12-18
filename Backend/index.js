import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();
const app = express();
const port = process.env.PORT || 8000;

const corsOptions = {
  origin: true,
};

// Use CORS middleware with the options
app.use(cors(corsOptions));

// You can add cookieParser if needed
app.use(cookieParser());

// Set up a connection to MongoDB (optional)
mongoose
  .connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB connection error:", err));

app.get("/", (req, res) => {
  res.send("API is Working");
});

// Start the server
app.listen(port, () => {
  console.log("Server is running on port " + port);
});
