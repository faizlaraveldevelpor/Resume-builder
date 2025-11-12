import type { Request, Response } from "express";
import { Googleloginservie } from "../services/googleloginservices.js";

export async function LoginGoogle(req:Request,res:Response) {
    Googleloginservie(req,res)
}