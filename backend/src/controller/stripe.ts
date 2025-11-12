import type { Request, Response } from "express";
import { User } from "../models/Authroute.js";
import { stripeService } from "../services/stripe.js";

export const createPaymentIntent = async (req: Request, res: Response) => {

  try {
 await User.findOneAndUpdate({email:req.body.email},{pay:true},{new:true})

   stripeService(req,res)
    
  } catch (error: any) {
    console.error("Error creating PaymentIntent:", error.message);
    res.status(500).json({ error: error.message });
  }
};
