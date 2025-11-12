import type{ Response,Request, NextFunction } from "express";
import jwt from "jsonwebtoken";

export const protect = (req: Request, res: Response, next: NextFunction) => {
  const token = req.cookies.token;
  console.log(token+"aaa");
  
  
  if (!token) return res.status(401).json({ message: "No token, authorization denied" });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET!);
    req.user = decoded as { id: string };
    next();
  } catch (err) {
    res.status(201).json({ message: "Token is not valid" });
  }
};
