import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { corsConfig } from "./config/corsConfig";
import { Request, Response } from "express";
import { userRoutes } from "./routes/userRoutes";
import connectDB from "./config/db";
dotenv.config();

const app = express();
app.use((req, res, next) => {
  const allowedOrigins = [
    "http://localhost:5173",
    "http://localhost:3000",
    "https://react-clicker.vercel.app",
  ];
  const origin = req.headers.origin as string;

  if (allowedOrigins.includes(origin)) {
    res.header("Access-Control-Allow-Origin", origin);
  }
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  res.header("Access-Control-Allow-Headers", "Content-Type");
  next();
});

app.options("*", (req, res) => {
  const allowedOrigins = [
    "http://localhost:5173",
    "http://localhost:3000",
    "https://react-clicker.vercel.app",
  ];
  const origin = req.headers.origin as string;

  if (allowedOrigins.includes(origin)) {
    res.header("Access-Control-Allow-Origin", origin);
  }
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  res.header("Access-Control-Allow-Headers", "Content-Type");
  res.status(204).send();
});

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

export default app;
