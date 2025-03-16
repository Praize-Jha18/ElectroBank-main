import UserNavbar from './UserNavbar'
import axios from 'axios'
import { toast, ToastContainer , Id} from 'react-toastify';
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const AccountStatement = () => {
    const navigate = useNavigate();

    //============== User Interface ============== //
    interface User {
        name: string;
        acc_num: string;
        phone: string;
        email: string;
        country: string;
        occupation: string;
        activated: boolean;
        current_balance: string;
        account_currency: string;
        account_type: string;
    }
    //============== Verifying if User is logged in ============== //
    useEffect(() => {
        const toastId: Id = toast.info("Please wait, fetching user data...", { autoClose: false, closeOnClick: false });
        axios
        .get<{ user: User }>("http://localhost:3000/getUser", { withCredentials: true })
        .then((response) => {
            if (response) {
            const User = response.data.user;
            console.log(User);
            toast.dismiss(toastId);
            } else {
            console.log("user not found");
            navigate("/auth/login");
            }
        })
        .catch((err) => {
            console.log(err);
            navigate("/auth/login");
        });
    }, []);

    //======= Populating the page with Transactions
    return (<>
        <ToastContainer />
        <UserNavbar header={'Account Statement'} />
        <div className="bg-slate-100 font-poppins text-base pt-32 px-6 h-screen">
            <h1 className='text-[#27173E]  text-base text-center py-1'>TRANSACTION STATEMENT</h1>
            <p className='text-[#958D9E] text-base pb-4'>Here is your Transaction Statement</p>
            <p className='text-sky-500'>No transactions at the moment</p>

        </div>
    </>
    )
}

export default AccountStatement