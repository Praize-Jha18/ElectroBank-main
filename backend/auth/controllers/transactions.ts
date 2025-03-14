import User from '../../database/model'
import {Request, Response } from 'express'

const bankTransfer =  async (req: Request, res : Response): Promise<void>=>{
    const  {form, account_type} = req.body
    const {amount, reference, beneficiary_acc_num, beneficiary_name} = form
    const userID = res.locals.user

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
            if (user.current_balance < amount) {
                res.status(401).json({ error: "Insufficient funds" });
            }

            // Deduct from sender
            user.current_balance -= amount;
            user.transactions.push({
                amount,
                type: "debit",
                reference,
                beneficiary_name,
                beneficiary_acc_type: account_type,
                beneficiary_acc_num, 
                status: "completed", 
                createdAt: new Date(), 
            });
            // Add to beneficiary (only if found)
        if (beneficiary) {
            beneficiary.current_balance += amount;
            beneficiary.transactions.push({
                amount,
                type: "credit",
                beneficiary_name,
                beneficiary_acc_type: account_type,
                reference,
                beneficiary_acc_num, 
                status: "completed",
                createdAt: new Date(),
            });

            await beneficiary.save();
        }

        await user.save();
        res.status(201).json({success : "Transfer successful"})
        }
       
    }catch(err){
        console.log(err)
    }

}

export default  {bankTransfer}