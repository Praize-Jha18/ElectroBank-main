import UserNavbar from './UserNavbar'
import axios from 'axios'
import { toast, ToastContainer , Id} from 'react-toastify';
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { format } from "date-fns";


const AccountStatement = () => {
    const navigate = useNavigate();
    const [creditTransac, setCreditTransac] = useState<Transaction[]>([]);
    const [debitTransac, setDebitTransac] = useState<Transaction[]>([]);

    const formatDate = (isoDate: string) => {
        return format(new Date(isoDate), "EEEE, MMMM do, yyyy h:mm a");
    };

    interface Transaction {
        beneficiary_name?: string;
        beneficiary_acc_num?: string;
        sender_name?: string;
        sender_acc_num?: string;
        amount: number;
        acc_type: string;
        status: string;
        transac_id: string;
        date: string;
    }
    
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
        .get<{ user: User }>("https://electrobank-main.onrender.com/getUser", { withCredentials: true })
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

    useEffect(()=>{
        axios.get('https://electrobank-main.onrender.com/transact-statement', {withCredentials : true})
        .then((response)=>{
            if(response){
                setCreditTransac(response.data.sender_details)
                setDebitTransac(response.data.beneficiary_details)
            }
        })
        .catch((error)=>{
            console.log(error)
        })
    },[])

    //======= Populating the page with Transactions
    return (<>
        <ToastContainer />
        <UserNavbar header={'Account Statement'} />
        <div className="bg-slate-100 font-poppins text-base pt-32 px-6 h-full">
            <h1 className='text-[#27173E]  text-base text-center py-1'>TRANSACTION STATEMENT</h1>
            <p className='text-[#958D9E] text-base pb-4'>Here is your Transaction Statement</p>
            {debitTransac.length > 0 || creditTransac.length > 0 ? (
               <div className='w-full'>
                <h1>Credited History</h1>
                {creditTransac.map((transac,index)=>(
                    <div key={index} className='credit w-[100%] mx-auto flex items-center justify-between h-auto p-3 mt-10 bg-white rounded-md'> 
                        <div>
                            <h1  className='text-[14px]'>name: <span className='text-[10px]'>{transac.beneficiary_name}</span> </h1>
                            <h1 className='text-[14px]'>Account number : <span className='text-[10px]'>{transac.beneficiary_acc_num}</span> </h1>
                            <h1 className='text-[14px]'>Amount : <span className='text-[10px] text-[red]'>-{transac.amount}</span> </h1>
                            <h1  className='text-[14px]'>Account type : <span className='text-[10px]'>{transac.acc_type}</span></h1>
                        </div>
                        <div>
                            <h1 className='text-[14px]'>Status: <span className='text-[12px] text-[green]'>{transac.status}</span>  </h1>
                            <h1  className='text-[14px]'>ref : <span className='text-[12px]'>{transac.transac_id}</span></h1>
                            <h1  className='text-[14px]'>Date : <span className='text-[12px]'>{formatDate(transac.date)}</span></h1>
                        </div>
                    </div>
                ))}
                <h1>Debit History</h1>
                 {debitTransac.map((transac,index)=>(
                    <div key={index} className='credit w-[100%] mx-auto flex items-center justify-between h-auto p-3 mt-10 bg-white rounded-md'> 
                        <div>
                            <h1  className='text-[14px]'>name: <span className='text-[10px]'>{transac.sender_name}</span> </h1>
                            <h1 className='text-[14px]'>Account number : <span className='text-[10px]'>{transac.sender_acc_num}</span> </h1>
                            <h1 className='text-[14px]'>Amount : <span className='text-[10px] text-[green]'>+{transac.amount}</span> </h1>
                            <h1  className='text-[14px]'>Account type : <span className='text-[10px]'>{transac.acc_type}</span></h1>
                        </div>
                        <div>
                            <h1 className='text-[14px]'>Status: <span className='text-[12px] text-[green]'>{transac.status}</span>  </h1>
                            <h1  className='text-[14px]'>ref : <span className='text-[12px]'>{transac.transac_id}</span></h1>
                            <h1  className='text-[14px]'>Date : <span className='text-[12px]'>{formatDate(transac.date)}</span></h1>
                        </div>
                    </div>
                ))}
               
               
               </div>
            ) : 
             <p className='text-sky-500'>No transactions at the moment</p>
            }
           

        </div>
    </>
    )
}

export default AccountStatement