import User from '../../database/model'
import {Response , Request} from 'express'
import bcrypt from "bcrypt";
import { error } from 'console';

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

export default {editProfile, changePassword}