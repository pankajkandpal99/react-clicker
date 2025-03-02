export const corsConfig = {
  origin: ["http://localhost:5173", process.env.MY_BACKEND_URL!],

  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization"],
  credentials: true,
  preflightContinue: false,
  optionsSuccessStatus: 204,
};
