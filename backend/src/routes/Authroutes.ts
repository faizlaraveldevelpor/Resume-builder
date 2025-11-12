import express from "express";
import { register, login, logout, singleuser } from "../controller/auth.js";
import { upload } from "../utils/multer.js";
import { protect } from "../middleware/Auth.js";

const Authrouter = express.Router();

Authrouter.post("/register",upload.single("img"), register); 
Authrouter.post("/login",upload.single("img"), login);
Authrouter.post("/logout", logout);
Authrouter.get("/singleuser",protect,upload.single("img"), singleuser);

export default Authrouter;
