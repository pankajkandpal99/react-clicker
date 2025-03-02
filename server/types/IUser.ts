import { Document } from "mongoose";

export interface IUser extends Document {
  name?: string;
  email?: string;
  score: number;
  prizesWon: number;
}
