import type{ Request, Response } from "express";
import {User} from "../models/Authroute.js"
import bcrypt from "bcrypt";
import jwt,{type JwtPayload } from "jsonwebtoken";
import {type IUser } from "../types/Authtypes.js";
import { Login, Register, singleuserget } from "../services/auth.js";

export const register = async (req: Request, res: Response) => {
  const { name, email, password } = req.body as IUser;
  try {
    if (!name||!email||!password) {
        return res.status(201).json({success:false,"message":"enter all the fields"})
    }
    let user = await User.findOne({ email });
    if (user) return res.status(201).json({success:false, message: "User already exists" });
   Register(res,name, email, password)
   
  } catch (err) {
    console.error(err);
    res.status(500).send("Server Error");
  }
};

export const login = async (req: Request, res: Response) => {
  const { email, password } = req.body as IUser;
  try {
     if (!email||!password) {
        return res.status(201).json({success:false,"message":"enter all the fields"})
    }
    const user = await User.findOne({ email });
    if (!user) return res.status(201).json({ success:false,"message": "Invalid credentials" });

    Login(res,email,password,user)
  } catch (err) {
    console.error(err);
    res.status(500).send("Server Error");
  }
};

export const logout = (_req: Request, res: Response) => {
  res.clearCookie("token").status(200).json({ messsage: "Logged out" });
};
export const singleuser=async(req:Request, res:Response) => {
 singleuserget(req,res)
}
