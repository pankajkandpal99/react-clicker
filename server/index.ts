import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { corsConfig } from "./config/corsConfig";
import { Request, Response } from "express";
import { userRoutes } from "./routes/userRoutes";
import connectDB from "./config/db";

dotenv.config();

const app = express();

app.use(cors(corsConfig));
app.use(express.json());

app.get("/", (_req: Request, res: Response) => {
  res.send("Backend is running!");
});

app.use("/api", userRoutes);

const PORT = process.env.PORT || 3000;
connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
});
