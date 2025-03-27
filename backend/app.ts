import express from "express";

import mongoose from "mongoose";

import cors from "cors";

import path from "path";

import cookieParser from "cookie-parser";

import flash from "connect-flash";

import session from "express-session";
import authRoute from "./auth/routes/auth"
import { key } from './auth/controllers/token'


const app = express();

//=============================== MIDDLEWARE
app.use(
  cors({
    origin: "https://electrobank-main-1.onrender.com", // Allow frontend requests
    credentials: true, // Allow cookies if needed
    allowedHeaders: ["Content-Type", "Authorization"],
    methods: ["GET", "POST", "PUT", "DELETE"],
  })
);
app.use(express.json())
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
app.use(flash());
app.use(express.static('public'))

//=============================== SESSION CONFIG
app.use(
    session({
      secret: key || 'electroBank',
      resave: false,
      saveUninitialized: true,
      cookie: { secure: false }, // Set `secure: true` if using HTTPS
    })
  ); 
//=============================== ROUTES PAGES LOADED
app.use(authRoute)
//=============================== ROUTES
// Apply CORS middleware to each route individually
app.use("/auth", cors(), authRoute);

//=============================== DATABASE CONFIG
const port = 3000;
const dbiUri = 'mongodb+srv://praisejahfrancis:peejay@peejaycluster.ccu0cf5.mongodb.net/EliteOceanicSavings?retryWrites=true&w=majority&appName=peejaycluster'
mongoose.connect(dbiUri)
  .then(()=>{
    app.listen(port, ()=>console.log(`App running on port ${port}`))
  })
  .catch((err)=> console.log(err))

//=============================== STATIC PAGES LOADER
app.use(express.static(path.join(__dirname, "../dist")));






