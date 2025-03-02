import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { corsConfig } from "./config/corsConfig";
import { userRoutes } from "./routes/userRoutes";
import connectDB from "./config/db";

dotenv.config();

const app = express();

app.use(cors(corsConfig));
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Backend is running!");
});

app.use("/api", userRoutes);

connectDB().then(() => {
  const PORT = process.env.PORT || 8000;
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
});
