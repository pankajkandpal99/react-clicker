export const corsConfig = {
  origin: ["http://localhost:5173", "https://react-clicker.vercel.app"],
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type"],
  credentials: true,
  preflightContinue: false,
  optionsSuccessStatus: 204,
};
