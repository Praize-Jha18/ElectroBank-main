// Create middleware to verify user by verifying JWT and finding the users from the decodedToken and returning it
/* 
The user is sent to the res.json() method and axios retrives the response and gets it, then store it in a state.
*/
import { Request, Response, NextFunction } from 'express'

import jwt from 'jsonwebtoken'
import { key } from '../auth/controllers/token'
import models from '../database/model'

const { User } = models;
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
        console.log("Cookie", res.cookie)
        res.status(401).json({error : "Token not found"})
    }
}

const requireAuth = (req : Request, res : Response, next : NextFunction) => {
    const token = req.cookies.jwt;
    console.log("Token: ", token)
    console.log(res.cookie)
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
        console.log("Cookie", res.cookie)
        res.status(401).json({err : "user not authenticated", redirect : '/'})
        next();
    }
}

const adminAuth = async (req: Request, res: Response, next: NextFunction) => {
    const token = req.cookies.jwt
    console.log(token)
    try {
        if(token){
            jwt.verify(token, key, async (err : any, decodedToken: any)=>{
                if(err){
                    console.log(err)
                    res.json({error : "Invalid Token"})
                    next()
                }else{
                    const user = await User.findById(decodedToken.id);
                    if (!user || user.role !== 'admin') {
                        res.status(404).json({ error: "User not found" });
                    } else {
                        res.locals.user = user
                        next();
                    }
                }
            })
        }
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
};
const authMiddleware = { verifyUser, requireAuth, adminAuth };

export default authMiddleware;