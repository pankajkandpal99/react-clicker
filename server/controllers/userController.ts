import { Request, Response } from "express";
import User from "../models/userModel";
import { clickSchema } from "../config/zodSchema";

export const handleClick = async (
  req: Request,
  res: Response
): Promise<void> => {
  const validation = clickSchema.safeParse(req.body);
  if (!validation.success) {
    res.status(400).json({
      success: false,
      message: "Invalid request data",
      errors: validation.error.errors,
    });
    return;
  }

  try {
    let user = await User.findOne({});
    if (!user) {
      user = new User({ score: 0, prizesWon: 0 });
    }

    user.score += 1;

    // Check for bonus points (50% chance)
    const bonusChance = Math.random();
    let bonusPoints = null;
    if (bonusChance <= 0.5) {
      bonusPoints = 10;
      user.score += bonusPoints;
    }

    // Check for prize (25% chance)
    const prizeChance = Math.random();
    let prizeWon = false;
    if (prizeChance <= 0.25) {
      prizeWon = true;
      user.prizesWon += 1;
    }

    const savedUser = await user.save();
    // console.log("saved user : ", savedUser);

    res.status(200).json({
      success: true,
      score: user.score,
      bonusPoints,
      prizeWon,
    });
  } catch (error) {
    console.error("Error handling click:", error);
    res.status(500).json({
      success: false,
      message: "Server error, please try again later",
    });
  }
};

export const getUserData = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    let user = await User.findOne({});
    if (!user) {
      user = new User({ score: 0, prizesWon: 0 });
      await user.save();
    }

    res.status(200).json({
      success: true,
      score: user.score,
      prizesWon: user.prizesWon,
    });
  } catch (error) {
    console.error("Error fetching user data:", error);
    res.status(500).json({
      success: false,
      message: "Server error, please try again later",
    });
  }
};
