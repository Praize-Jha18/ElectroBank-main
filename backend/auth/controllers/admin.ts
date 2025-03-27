import {Request, Response } from 'express'
import models from '../../database/model'


const { User, Transaction } = models;

const allUsers = async (req: Request, res : Response)=>{
    try{
        const user = await User.find({});
        const transaction = await Transaction.find({})
        res.status(200).json({user, transaction})

    }catch(err){
        res.status(500).json({err})
    }
}

export default {allUsers}