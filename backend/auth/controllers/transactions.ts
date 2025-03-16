
import {Request, Response } from 'express'
import models from '../../database/model'

const { User, Transaction } = models;

import mongoose from 'mongoose';

const bankTransfer =  async (req: Request, res : Response): Promise<void>=>{
    const  {form, account_type} = req.body
    const {amount, reference, beneficiary_acc_num, beneficiary_name} = form
    const userID = res.locals.user

    const amountNumber = Number(amount)

    try{
        const user = await User.findById(userID)
        if(!user){
            res.status(404).json({ error: "User not found" });
        }else{
            const beneficiary = await User.findOne({acc_num : beneficiary_acc_num})
            if(!beneficiary){
                res.status(500).json({error : "Account not found"})
            }
             // Check if user has enough balance
            if (user.current_balance < amountNumber) {
                res.status(401).json({ error: "Insufficient funds" });
            }

            // Deduct from sender
            user.current_balance -= amountNumber;

            // Add to beneficiary (only if found)
        if (beneficiary) {
            if(beneficiary.account_type != account_type.toLowerCase()){
                res.status(402).json({error : "Invalid Account type"})
            }
            beneficiary.current_balance += amountNumber;
            console.log('saved');
            await beneficiary.save();
        }
        await user.save();
        // send to transaction table 
        Transaction.create({
            amount : amountNumber,
            type: "credit",
            beneficiary_name, 
            beneficiary_acc_type: account_type,
            reference,
            beneficiary_acc_num,
            status: "completed",
            createdAt: new Date(),
            user_id: user.email,
            sender_name: user.name,
            sender_acc_num: user.acc_num,
            sender_acc_type: user.account_type,
            transaction_id: new  mongoose.Types.ObjectId()
            
        });
        res.status(201).json({message : "Transfer Successful"})
        

} 
       
    }catch(err){
        console.log(err)
    }

}

export default  {bankTransfer}