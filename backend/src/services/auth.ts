import {User} from "../models/Authroute.js"
import type  Docomet from 'mongoose'
import bcrypt from "bcrypt";
import jwt,{type JwtPayload } from "jsonwebtoken";
import {type IUser } from "../types/Authtypes.js";
import type { Request,Response } from "express";
export async function Register(res:Response,name:string, email:string, password:string) {
     const hashedPassword = await bcrypt.hash(password, 10);
    const Usercreate=await User.create({name:name,email:email,password:hashedPassword,pay:false})

    const token = jwt.sign({ id: Usercreate._id }, process.env.JWT_SECRET!, { expiresIn: '7d' });

    res
      .cookie("token", token, { httpOnly: true, maxAge: 7 * 24 * 60 * 60 * 1000 })
      .status(201)
      .json({ message: "User registered", user: { id: Usercreate._id, name, email } });
}
export async function Login(res:Response, email:string, password:string,user:IUser) {
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ message: "Invalid credentials" });

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET!, { expiresIn: '7d' });

    res
      .cookie("token", token, { httpOnly: true, maxAge: 7 * 24 * 60 * 60 * 1000 })
      .status(200)
      .json({ message: "Login successful", user: { id: user._id, name: user.name, email: user.email } });


}
export const singleuserget=async(req:Request,res:Response)=>{
   try {
    
    const user = await User.findById(req.user?.id);

    if (!user) {
      return res.status(404).json({ message: "User not found ❌" });
    }

   return res.status(200).json({success:true,message:"single user get",user});
  } catch (error) {
    console.error("Error fetching user:", error);
    res.status(500).json({ message: "Internal server error" });
  }
}