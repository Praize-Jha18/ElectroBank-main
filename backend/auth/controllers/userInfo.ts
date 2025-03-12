import User from '../../database/model'
import {Response , Request} from 'express'

const editProfile = async  (req : Request, res : Response) =>{
    const {lastName, firstName, occupation, phone, email} = req.body
    const user = res.locals.user
    const getUser = await User.findById(user)
    try{
        if(getUser){
            const results = await User.updateMany(
                { _id : user},
                {$set : 
                {   name : firstName || lastName != '' ? (firstName + " " + (lastName ? lastName : getUser.name.split(" ")[1])) : getUser.name,
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

export default {editProfile}