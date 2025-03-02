import express from "express";
import { getUserData, handleClick } from "../controllers/userController";

const router = express.Router();

router.get("/user", getUserData);
router.post("/click", handleClick);

export { router as userRoutes };
