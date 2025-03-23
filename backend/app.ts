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
    origin: "http://localhost:5173", // Allow frontend requests
    credentials: true, // Allow cookies if needed
  })
);
app.use(express.json())
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
app.use(flash());

//=============================== SESSION CONFIG
app.use(
    session({
      secret: key || 'electroBank',
      resave: false,
      saveUninitialized: true,
      cookie: { secure: false }, // Set `secure: true` if using HTTPS
    })
  ); 

//=============================== DATABASE CONFIG
const dbiUri = 'mongodb+srv://praisejahfrancis:peejay@peejaycluster.ccu0cf5.mongodb.net/EliteOceanicSavings?retryWrites=true&w=majority&appName=peejaycluster'
mongoose.connect(dbiUri)
  .then(()=>{
    app.listen(3000, ()=>console.log("App running on port 3000"))
  })
  .catch((err)=> console.log(err))

//=============================== STATIC PAGES LOADER
app.use(express.static(path.join(__dirname, "../dist")));
//=============================== ROUTES PAGES LOADED
app.use(authRoute)

//=============================== STATIC PAGES
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, "../dist", "index.html"));
});

