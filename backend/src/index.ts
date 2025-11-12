import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import cookie_parser from 'cookie-parser'
import { DB } from './config/DB.js'
import { DocomentRoutes } from './routes/docomentroutes.js'
import Authrouter from './routes/Authroutes.js'
import Googleloginroute from './routes/googleloginroute.js'
import StripeRoutes from './routes/Striperotes.js'


const app=express()
app.use(
  cors({
    origin: true,
    credentials: true,
  })
);
app.use(cookie_parser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
dotenv.config({ path: "/.env" });
app.use('/api/v1',Authrouter)
app.use('/api/v1',Googleloginroute)
app.use('/api/v1',StripeRoutes)
app.listen(process.env.TOKEN,()=>{
    console.log("server is on",process.env.TOKEN);
    DB()
    
})
