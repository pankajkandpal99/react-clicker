export const corsConfig = {
  origin: ["http://localhost:5173", "https://our-deployed-url.com"],

  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization"],
  credentials: true,
  preflightContinue: false,
  optionsSuccessStatus: 204,
};


