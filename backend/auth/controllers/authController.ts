import { Request, Response } from "express";
import key from './token'
import jwt from 'jsonwebtoken'
import User from '../../database/model'


// ======================== CREATING JWT TOKEN
const maxAge = (60 * 60)
const createToken = (id : string) =>{
return jwt.sign({id},  key, { expiresIn : maxAge})
}
// ======================== CREATING ACCOUNT NUMBER 
const Acc_no = ()=>{
    return "12" + Math.floor(Math.random() * 100000000).toString().padStart(8, "0");
}
console.log()

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
const signup = async (req: Request, res: Response) => {
    const {firstName, lastName, username, address, password, email, phoneNumber, dob, selectedCountry,  selectedCurrency, selectedMaritalStatus, selectedGender, selectedAccountType} = req.body

    try{
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
            gender: selectedGender?.value, 
            marital_status: selectedMaritalStatus?.value, 
            phone: phoneNumber,
            current_balance : 0,
            acc_num: Acc_no(), 
            activated: true,
        })

        console.log("✅ User Created:", user); 
        const token = createToken(String(user._id));
        res.cookie("jwt", token, { httpOnly: true, maxAge: maxAge * 1000 });

        res.status(201).json({ message: "User registered successfully", token });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Server error" });
    }
};

const login = async (req : Request, res: Response)=>{
    const {email, password} = req.body

    try {
        const user = await User.login(email, password);
        const token = createToken(String(user._id))
        res.cookie('jwt', token,{httpOnly : true, maxAge : maxAge * 1000 })
        res.redirect('/')
    }
    catch(err){
        console.error(err);
        res.status(500).json({ error: "Server error" });
    }
}


export default {signup, login}