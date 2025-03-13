import User from '../../database/model'
import {Request, Response } from 'express'

const bankTransfer =  async (req: Request, res : Response)=>{
    const  {form, account_type} = req.body
    const {amount, reference, beneficiary_acc_num, beneficiary_name} = form
    const userID = res.locals.user

    try{
        const user = await User.findById(userID)
        if(!user){
            res.status(500)
        }else{
            const beneficiary = await User.findOne({beneficiary_acc_num})
            if(!beneficiary){
                res.status(500).json({error : "Account not found"})
            }else{
                // Transaction process
                user.current_balance = user.current_balance > amount ? user.current_balance - amount : res.status(401).json({error : "Insufficient funds"})
                user.transactions.push({amount, type : "debit", })
                await user.save()
                beneficiary.current_balance = beneficiary.current_balance + amount
                beneficiary.transactions.push({amount, type : "credit" ,beneficiary_name, beneficiary_acc_type : account_type?.value })

            }
       
        }
       
    }catch(err){
        console.log(err)
    }

}

export default  {bankTransfer}