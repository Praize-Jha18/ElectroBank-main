import {Request, Response } from 'express'
import models from '../../database/model'


const { User, Transaction } = models;

const allUsers = async (req: Request, res : Response)=>{
    try{
        const users = await User.find({})  || [];
        const transaction = await Transaction.find({}) || []
       

        if(users.length == 0 && transaction.length == 0){
            res.status(202).json({ message: "No User..." });
        }else{
            res.status(200).json({users, transaction})
        }

    }catch(err){
        res.status(500).json({err})
    }
}

export default {allUsers}