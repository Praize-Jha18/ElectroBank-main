import {useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

function AdminDashboard() {
  interface User {
    name: string;
    age: number;
    country: string;
    address?: string;
    user_name: string;
    password: string;
    DOB: string;
    account_currency: string;
    account_type: string;
    email: string;
    occupation : string;
    gender: string;
    marital_status: string;
    phone: string;
    current_balance: number;
    profile_photo?: string;
    acc_num: string;
    activated: boolean;
    transaction_pin:string;
    last_login?: string;
    role: string;
  }
  interface Transaction{
    amount: number;
    beneficiary_name : string;
    beneficiary_acc_num : string;
    beneficiary_acc_type : string;
    type: string;
    status: string;
    reference: string;
    createdAt: string;
    user_id: string;
    sender_name: string;
    sender_acc_num: string;
    sender_acc_type: string;
    transaction_id: string;
  }
    const [isAdmin, setIsAdmin] = useState(false);
    const [users, setUsers] = useState<User[]>([])
    const [transactions, setTransactions] = useState<Transaction[]>([])
    const navigate = useNavigate();

    useEffect(()=>{
        axios.get('https://electrobank-main.onrender.com/admin',  { withCredentials: true })
        .then((res)=>{
           if(res.status === 200){
            setIsAdmin(true)
            console.log(res.data.user)
            console.log(res.data.transaction)
           }
        })
        .catch((error)=>{
          console.log(error)
          navigate('/auth/login')
        })
    },[])
    console.log("Users", users, "Transaction", transactions)
    if (!isAdmin) return null;
  return (
    <>
        <div>AdminDashboard</div>
    </>
    
  )
}

export default AdminDashboard