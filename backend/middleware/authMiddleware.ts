// Create middleware to verify user by verifying JWT and finding the users from the decodedToken and returning it
/* 
The user is sent to the res.json() method and axios retrives the response and gets it, then store it in a state.
*/
import { Request, Response, NextFunction } from 'express'
import User from '../database/model'
import jwt from 'jsonwebtoken'
import key from '../auth/controllers/token'

const verifyUser = async (req : Request, res : Response, next : NextFunction): Promise<void> =>{
    console.log("Cookies received:", req.cookies);
    const token = req.cookies.jwt
    if(token){
        console.log("Token found:", token);
        jwt.verify(token, key, async (err : any, decodedToken: any)=>{
            if(err){
                console.log(err)
                res.json({error : "Invalid Token"})
                next()
            }else{
                console.log("Decoded Token:", decodedToken);
                const user = await User.findById(decodedToken.id);
                if (!user) {
                    res.status(404).json({ error: "User not found" });
                } else {
                    res.json({ user });
                }
            }
        })
    }else{
        console.log("Token not found")
        res.status(401).json({error : "Token not found"})
    }
}

export default verifyUser;