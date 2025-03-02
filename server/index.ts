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

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "https://react-clicker.vercel.app");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.header("Access-Control-Allow-Headers", "Content-Type");
  next();
});

app.options("*", (req, res) => {
  res.header("Access-Control-Allow-Origin", "https://react-clicker.vercel.app");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.header("Access-Control-Allow-Headers", "Content-Type");
  res.status(204).send();
});

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

export default app;
