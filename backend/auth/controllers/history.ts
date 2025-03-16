import {Request, Response } from 'express'
import models from '../../database/model';

const { User, Transaction } = models;

const transac = async (req : Request, res: Response)=>{
    const userID = res.locals.user
    try {
        const user = await User.findById(userID)
        if(user){
            const transacInfo = await Transaction.find({ sender_name : user.name})

            //=========== Populating the senders transaction page
            const transaction_details = transacInfo.map(transac => ({
                beneficiary_name: transac.beneficiary_name,
                beneficiary_acc_num: transac.beneficiary_acc_num,
                status: transac.status,
                amount: transac.amount,
                type: transac.type,
                date: transac.createdAt,
                transac_id: transac.transaction_id
            }));
            res.status(201).json({transaction_details})

            //=============
        }
        
        
    } catch (error) {
        console.log(error)
    }
}

export default {transac}