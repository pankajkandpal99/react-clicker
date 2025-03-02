import mongoose, { Schema } from "mongoose";
import { IUser } from "../types/IUser";

const userSchema: Schema = new Schema(
  {
    name: { type: String },
    email: { type: String, unique: true },
    score: { type: Number, required: true, default: 0 },
    prizesWon: { type: Number, required: true, default: 0 },
  },
  { timestamps: true }
);

const User = mongoose.model<IUser>("User", userSchema);
export default User;
