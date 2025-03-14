// Create middleware to verify user by verifying JWT and finding the users from the decodedToken and returning it
/* 
The user is sent to the res.json() method and axios retrives the response and gets it, then store it in a state.
*/
import { Request, Response, NextFunction } from 'express'
import User from '../database/model'
import jwt from 'jsonwebtoken'
import key from '../auth/controllers/token'

const verifyUser = async (req : Request, res : Response, next : NextFunction): Promise<void> =>{
    const token = req.cookies.jwt
    if(token){
        jwt.verify(token, key, async (err : any, decodedToken: any)=>{
            if(err){
                console.log(err)
                res.json({error : "Invalid Token"})
                next()
            }else{
                const user = await User.findById(decodedToken.id);
                if (!user) {
                    res.status(404).json({ error: "User not found" });
                } else {
                    res.status(200).json({ user });
                    next()
                }
            }
        })
    }else{
        console.log("Token not found")
        res.status(401).json({error : "Token not found"})
    }
}

const requireAuth = (req : Request, res : Response, next : NextFunction) => {
    const token = req.cookies.jwt;
    if(token){
        jwt.verify(token, key, async (err : any, decodedToken: any)=>{
            if(err){
                console.log(err)
                res.status(401).json({error : "Invalid Token"})
                next()
            }else{
                const userID = decodedToken.id
                res.locals.user = userID
                next()
    }})}
    else{
        console.log("User not authenticated")
        res.status(500).json({err : "user not authenticated", redirect : '/'})
        next();
    }
}

const authMiddleware = { verifyUser, requireAuth };

export default authMiddleware;