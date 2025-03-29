import {Request, Response } from 'express'
import models from '../../database/model'
import { Message } from 'emailjs';


const { User, Transaction } = models;

const allUsers = async (req: Request, res : Response)=>{
    try{
        const users = await User.find({})  || [];
        const transaction = await Transaction.find({}) || []
       

        if(users.length == 0 && transaction.length == 0){
            res.status(202).json({ message: "No User...", users : [], transaction : [] });
        }else{
            res.status(200).json({users, transaction})
        }

    }catch(err){
        res.status(500).json({err})
        
    }
}

const editUser = async (req: Request, res : Response)=>{
    try{
        const {userID, editedBalance, role} = req.body
        const user = await User.findById(userID)
        if(user){
            user.current_balance = editedBalance != '' ? editedBalance : user.current_balance
            user.role = role != '' ? role : user.role
            await user.save()
            res.status(201).json({message : `${user.name} profile edited Successfully`})
        }else{
            res.status(400).json({message : "user not found"})
        }
    }catch(err){
        console.log(err)
        res.status(500).json({ message: "Server error" });
    }
}

const deleteUser = async (req: Request, res : Response)=>{
    try{
        const {userID} = req.body
        const deletedUser = await User.findByIdAndDelete(userID)
        if (!deletedUser) {
            res.status(404).json({ message: "User not found" });
        }else{
            res.status(200).json({ message: "User deleted successfully" });
        }
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: "Server error" });
    }
}

const deactivate = async (req: Request, res : Response)=>{
    try{
        const {userID} = req.body
        const user = await User.findById(userID)
        if(user){
            user.activated = false
            await user.save()
            res.status(200).json({ message: `${user.name} account deactivated` });
        }else{
            res.status(404).json({ message: "User not found" });
        }
    }catch(err){
        console.log(err)
        res.status(500).json({ message: "Server error" });
    }
}

const activate = async (req: Request, res : Response)=>{
    try{
        const {userID} = req.body
        const user = await User.findById(userID)
        if(user){
            user.activated = true
            await user.save()
            res.status(200).json({ message: `${user.name} account activated` });
        }else{
            res.status(404).json({ message: "User not found" });
        }
    }catch(err){
        console.log(err)
        res.status(500).json({ message: "Server error" });
    }
}

export default {allUsers, editUser, deleteUser, deactivate,activate}