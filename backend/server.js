import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import blogRoutes from "./routes/blogRoutes.js";

dotenv.config(); // Load .env variables

const app = express();
app.use(cors({ origin: "http://localhost:5173" }));
app.use(express.json());
// Connect to MongoDB
mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log("Connected to MongoDB");
}).catch((err) => {
  console.error("MongoDB connection error:", err);
});

// Routes
app.use("/api/blogs", blogRoutes);

app.listen(5000, () => {
  console.log("Server running on http://localhost:5000");
});
