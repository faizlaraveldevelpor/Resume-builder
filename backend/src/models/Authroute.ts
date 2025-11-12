import mongoose, { Schema, Document } from "mongoose";
import type { IUser } from "../types/Authtypes.js";



const UserSchema: Schema = new Schema<IUser>({
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, },
  image: { type: String, },
  imagetag: { type: String, },
  pay:{type:Boolean,default:false}
});

export const User= mongoose.model<IUser>("User", UserSchema);
