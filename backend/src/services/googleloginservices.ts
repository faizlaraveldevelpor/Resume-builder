import type { Request, Response } from "express";
import jwt from 'jsonwebtoken'
import { User } from "../models/Authroute.js";
export async function Googleloginservie(req:Request,res:Response) {
    console.log(req.body);
    
    
    
    const findUser=await User.findOne({email:req.body.email})
    console.log(findUser);
    
    if (findUser==null) {
        await User.create({email:req.body.email,name:req.body.name,image:req.body.picture,pay:false})
    }
    const token = jwt.sign({ id: findUser?._id }, process.env.JWT_SECRET!, { expiresIn: '7d' });
    // console.log(token);
      return  res
          .cookie("token", token, { httpOnly: true, maxAge: 7 * 24 * 60 * 60 * 1000 })
          .status(200)
          .json({ message: "Login successful", });
}