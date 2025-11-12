import express from "express";
import { upload } from "../utils/multer.js";
import { LoginGoogle } from "../controller/googlelogin.js";

const Googleloginroute = express.Router();

Googleloginroute.post("/googlelogin",upload.single("img"), LoginGoogle); 


export default Googleloginroute;