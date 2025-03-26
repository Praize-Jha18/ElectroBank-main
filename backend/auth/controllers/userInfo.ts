import {Response , Request} from 'express'
import bcrypt from "bcrypt";
import multer from 'multer'
import path from 'path'

import models from '../../database/model'

const { User } = models;

const storage = multer.diskStorage({
    destination(req, file, cb) {
        cb(null, 'public/images' )
    },
    filename : (req, file, cb) =>{
        cb(null, file.fieldname + "_" + Date.now() + path.extname(file.originalname))
    }
})
const uploadPicture = multer({
    storage
}) 

const editProfile = async  (req : Request, res : Response) =>{
    const {lastName, firstName, occupation, phone, email} = req.body
    const user = res.locals.user
    const getUser = await User.findById(user)
    try{
        if(getUser){
            const results = await User.updateMany(
                { _id : user},
                {$set : 
                {   name : firstName || lastName != '' ? ((firstName ? firstName : getUser.name.split(" ")[0]) + " " + (lastName ? lastName : getUser.name.split(" ")[1])) : getUser.name,
                    email : email != '' ? email : getUser.email,
                    phone : phone != '' ? phone : getUser.address,
                    occupation : occupation != '' ? occupation : getUser.occupation 
                }},
                {strict : false, upsert : false})
            console.log("Updated Result", results)
            res.status(201).json({results})
        }
    }catch(err){
        console.log(err)
        res.status(500).json({err})
    }
}

const changePassword = async (req : Request, res : Response)=>{
    const {password} = req.body
    console.log(password)
    const userId = res.locals.user

    try{
        const user = await User.findById(userId)
        if(user){
            const isPassword = await bcrypt.compare(password, user.password)
            if(!isPassword){
                user.password = password
                await user.save();
                res.status(200).json({message : "Password reset succesfully"})
            }else{
                console.log("Cannot change password to current password")
                res.status(401).json({error : "Cannot change password to current password"})
            }
        }
    }catch(err){
        console.log(err)
        res.status(500).json({err})
    }
    
}

const upload = async (req: Request, res: Response): Promise<void>=>{
    console.log(req.file)
    
    
    try{
        const user = res.locals.user
        if (user) {
            const getUser = await User.findById(user);
            if (getUser) {
                if (req.file?.filename) {
                    getUser.profile_photo = req.file.filename; // Store relative path
                    await getUser.save();
                    res.status(200).json({ message: "Profile photo updated successfully" });
                } else {
                    res.status(400).json({ error: "No file uploaded" });
                }
            }    
        }else{
            res.status(401).json({ error: "User not authenticated" });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Server error" });
    }
}

const getUpload = async (req: Request, res: Response)=>{
    try{
        const userID = res.locals.user || ""
        const user = await User.findById(userID)
        if(user){
            const profile_picture = user?.profile_photo
            res.status(201).json({profile_picture})
        }else{
            res.status(401).json({ error: "Couldn't upload file, User not logged in" });
        }
    }catch(err){
        console.log(err)
        res.status(500).json({ error: "Server error" });
    }
  


}

export default {editProfile, changePassword, upload, uploadPicture, getUpload}