import type { Request, Response } from "express";
import { stripe } from "../config/Stripe.js";

export async function stripeService(req:Request,res:Response) {
     const paymentIntent = await stripe.paymentIntents.create({
      amount: 100, // $10.00 (1000 cents)
      currency: "usd",
    });
    res.status(200).json({
      success: true,
      message: "Stripe response",
      clientSecret: paymentIntent.client_secret,
    });
}