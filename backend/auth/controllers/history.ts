import {Request, Response } from 'express'
import models from '../../database/model';
import sendEmail from "./mailer";

const { User, Transaction } = models;

const transac = async (req : Request, res: Response):Promise<void> =>{
    const userID = res.locals.user
    try {
        const user = await User.findById(userID)
        if(user){
            const senderInfo = await Transaction.find({ sender_name : user.name})


            //=========== Populating the Credit transaction page
            const sender_details = senderInfo.map(transac => ({
                beneficiary_name: transac.beneficiary_name,
                beneficiary_acc_num: transac.beneficiary_acc_num,
                status: transac.status,
                amount: transac.amount,
                type: "Credit",
                date: transac.createdAt,
                acc_type : transac.beneficiary_acc_type,
                transac_id: transac.transaction_id
            }));


            
            const beneficiaryInfo = await Transaction.find({beneficiary_name : user.name})

            //=========== Populating the Debit transaction page
            const beneficiary_details = beneficiaryInfo.map(transac =>({
                sender_name: transac.sender_name,
               sender_acc_num: transac.sender_acc_num,
                status: transac.status,
                amount: transac.amount,
                type: "Debit",
                date: transac.createdAt,
                transac_id: transac.transaction_id
            }))

            if (sender_details.length === 0 && beneficiary_details.length === 0) {
                res.status(200).json({ message: "No transactions found..." });
            }else{
                res.status(202).json({beneficiary_details, sender_details})
            }  
        }
        
        
    } catch (error) {
        console.log(error)
        res.status(400).send(error)
    }
}

const support = async (req: Request, res: Response)=>{
    const {mailForm,} = req.body
    console.log(req.body)
    const userID = res.locals.user
    try {
        const user = await User.findById(userID)
        if(user){
            const from = user.email
            const subject = mailForm.subject
            const message = mailForm.message
            await sendEmail(from, subject, message);
            res.status(200).json({message : "Message sent successfully"});
        }
    }catch(error){
        res.status(500).json({ error: error });
    }

}
export default {transac, support}