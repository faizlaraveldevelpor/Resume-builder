import express from "express";
import { createPaymentIntent } from "../controller/stripe.js";
import { protect } from "../middleware/Auth.js";
import { upload } from "../utils/multer.js";

const StripeRoutes = express.Router();

StripeRoutes.post("/create-payment-intent",upload.single("img"), createPaymentIntent);

export default StripeRoutes;
