import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { Request, Response } from "express";
import { userRoutes } from "./routes/userRoutes";
import connectDB from "./config/db";
dotenv.config();

const app = express();

app.use((req, res, next) => {
  console.log("Origin:", req.headers.origin);
  next();
});

const allowedOrigins = [
  "http://localhost:5173",
  "http://localhost:3000",
  "https://react-clicker.vercel.app",
  "https://react-clicker-client-kxaa.vercel.app",
];

app.use(
  cors({
    origin: (origin, callback) => {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Accept", "Origin", "X-Requested-With"],
    credentials: true,
  })
);

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
