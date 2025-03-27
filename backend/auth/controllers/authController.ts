import { Request, Response } from "express";
import {key} from './token'
import jwt from 'jsonwebtoken'
import models from '../../database/model'


const { User } = models;
// ======================== CREATING JWT TOKEN
const maxAge = (60 * 60)
const createToken = (id : string) =>{
    return jwt.sign({id},  key, { expiresIn : maxAge})
}
// ======================== CREATING ACCOUNT NUMBER 
const Acc_no = (value: number )=>{
    return "12" + Math.floor(Math.random() * 100000000).toString().padStart(value, "0");
}

// ======================== CALCULATE AGE FUNCTION
const calculateAge = (dob: string): number => {
    const birthDate = new Date(dob);
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();

    // Adjust if birthday hasn't occurred this year
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }

    return age;
};
// ======================== SIGNUP SERVER
const signup = async (req: Request, res: Response): Promise<void> =>{
    const {firstName, lastName, occupation ,transaction_pin, username, address, password, email, phoneNumber, dob, selectedCountry,  selectedCurrency, selectedMaritalStatus, selectedGender, selectedAccountType} = req.body
    try{
         // Ensure user doesn't already exist
         const existingUser = await User.findOne({ email});
         if (existingUser) {
            res.status(400).json({ error: "Email already exists" });
        }else{
            const user = await User.create({
                name : firstName + " " +lastName,
                age : calculateAge(dob),
                country : selectedCountry?.value,
                address : address,
                user_name : username,
                password : password,
                DOB : dob,
                account_currency: selectedCurrency?.value, 
                account_type: selectedAccountType?.value, 
                email: email,
                transaction_pin : transaction_pin,
                occupation : occupation,
                gender: selectedGender?.value, 
                marital_status: selectedMaritalStatus?.value, 
                phone: phoneNumber,
                
                current_balance :Acc_no(6) ,
                acc_num: Acc_no(8), 
                activated: true,
            })
    
            console.log("✅ User Created:", user); 
            const token = createToken(String(user._id));
            res.cookie("jwt", token, { httpOnly: true, maxAge: maxAge * 1000, sameSite: "none", secure: true });
    
            res.status(201).json({user, message : 'Successful signup'});
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Server error" });
    }
};

const login = async (req : Request, res: Response): Promise<void> =>{
    const {email, password} = req.body
    console.log(email, password)
    try {
        const user = await User.login(email, password);
        const token = createToken(String(user._id))
        res.cookie("jwt", token,{httpOnly : true, maxAge : maxAge * 1000, sameSite: "none", secure: true })
        res.status(201).json({user});
    }
    catch(err: any){
        console.error(err.message); // Log error message

        // Determine the appropriate status code based on the error
        let statusCode = 500;
        let errorMessage = "An unexpected error occurred";

        if (err.message === "Email not found" || err.message === "Email or password is incorrect") {
            statusCode = 401; // Unauthorized
            errorMessage = err.message;
        }

        res.status(statusCode).json({ error: errorMessage });
    }
}

const logout = (req :  Request, res : Response)=>{
    const isCookie = req.cookies.jwt
    console.log(isCookie)
    if(isCookie){
        res.cookie('jwt', '', { httpOnly: true, secure: true, sameSite: "none", maxAge: 1 })
    }
    res.status(201).json({message : "logout successful"})
}
export default {signup, login, logout}