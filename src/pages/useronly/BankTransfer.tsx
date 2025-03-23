import  { useState, useEffect } from 'react'
import UserNavbar from './UserNavbar'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer , Id} from 'react-toastify';
import { CheckmarkCircle } from 'react-ionicons';

const BankTransfer = () => {

const navigate = useNavigate();
interface Transaction {
    amount: string;
    beneficiary_name: string;
    beneficiary_acc_num: string;
    reference: string;
}

    const [selectedAccountType, setSelectedAccountType] = useState('');
    const [message, setMessage] = useState("")
    const [showModal, setshowModal] = useState(false)
    const [form, setForm] = useState<Transaction>({} as Transaction);


    const handleAccountTypeChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
        setSelectedAccountType(event.target.value);
    };
    const handleFormChange = (e : any)=>{
        const name = e.target.name
        const value = e.target.value
        
        setForm((values)=>({...values, [name] : value}));
    }
    const handleSubmit = (e : React.FormEvent)=>{
        e.preventDefault();
        try{
            axios.post("http://localhost:3000/transfer", {form, account_type : selectedAccountType}, {withCredentials : true})
            .then((response)=>{
                if(response.status == 201){
                    console.log(response.data.message)
                    setshowModal(true)
                    // setForm({})
                }else{
                    console.log(response.data.error)
                    setMessage(response.data.error)
                }
            }).catch((err)=>{
                console.log(err)
            }) 
        }catch(err){
            console.log(err)
        }
        
    }
    const resetHandler = ()=>{
        setMessage("");
        setshowModal(false);
        setForm({});
    }


    interface User {
        name: string;
        email: string;
    }
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
              console.log("User not found");
              navigate("/auth/login");
            }
          })
          .catch((err) => {
            console.log(err);
            navigate("/auth/login");
          });
      }, []);
    
    return (
        <>
             <div className={`absolute w-[100%] bg-[#0000005d] ${showModal ? `block` : `hidden` } h-[100%] z-10 flex justify-center items-center`}>
                <div className='modal w-[40%] mx-auto h-[400px] absolute left-0 right-0 bg-white rounded-md z-20'>
                    <div className='w-[90%] h-[100%] mx-auto flex flex-col justify-center items-center'>
                        <CheckmarkCircle width="100px" height="100px" color="#4BB543" />
                        <h1 className='font-poppins text-[20px] font-[500]'>Transfer successful</h1>
                        <h6 className='text-[15px] font-montserrat font-[400] text-center'>{(`$${form.amount || ""}`)}</h6>
                        <p className='text-center font-poppins text-[#b5b4b4] '>The beneficiary account is expected to be credited within 5 minutes, subject to notification by the bank</p>
                        <button className='mt-10 w-[30%] h-[10%] bg-[#4BB543] rounnded-sm text-white' onClick={resetHandler}>Dismiss</button>
                    </div>
               
                </div>
             </div>
            <UserNavbar header={'Bank Transfer'} />
            <ToastContainer />
                <h1>{message}</h1>
                <div className="body pt-32 pb-36 font-poppins bg-slate-100 h-full">
                <h1 className='text-[#27173E] text-center text-3xl font-semibold pb-2'>Send Money</h1>
                <h1 className='text-center'></h1>
               
                
                <h3 className='text-[#27173E] text-center text-base font-medium pb-3'>Fill the form carefully</h3>

                <form className='px-4' onSubmit={handleSubmit}>

                    <div className='mt-4 '>
                        <label htmlFor="amount" className='text-[#27173E] text-xs'>Amount ($)</label>
                        <input type="number" className='w-full block text-black mt-1 placeholder:text-stone-500 bg-slate-100 border-b-stone-500 border-b-[1px] h-10 text-base outline-none' id="amount" placeholder='e.g 345678' name="amount" required onChange={handleFormChange}  value={form.amount || ""} />
                    </div>
                    <div className='mt-4'>
                        <label htmlFor="accountName" className='text-[#27173E] text-xs'>Beneficiary Account Name </label>
                        <input type="text" className='w-full block text-black mt-1 placeholder:text-stone-500 bg-slate-100 border-b-stone-500 border-b-[1px] h-10 text-base outline-none' id="accountName" placeholder='Beneficiary Account Name' required  name='beneficiary_name' onChange={handleFormChange} value={form.beneficiary_name || ""} />
                    </div>
                    <div className='mt-4'>
                        <label htmlFor="accountNumber" className='text-[#27173E] text-xs'>Beneficiary Account Number</label>
                        <input type="text" className='w-full block text-black mt-1 placeholder:text-stone-500 bg-slate-100 border-b-stone-500 border-b-[1px] h-10 text-base outline-none' id="accountNumber" placeholder='Beneficiary Account Number' required  name='beneficiary_acc_num' onChange={handleFormChange} value={form.beneficiary_acc_num || ""} />
                    </div>
                    <div className='mt-4'>
                        <label htmlFor="description" className='text-[#27173E] text-xs'>Description</label>
                        <input type="text" className='w-full block text-black mt-1 placeholder:text-stone-500 bg-slate-100 border-b-stone-500 border-b-[1px] pb-4 text-base outline-none' id="description" placeholder='Description' name='reference' required  onChange={handleFormChange} value={form.reference || ""} />
                    </div>
                    <div className="mt-4">
                        <label htmlFor="accountType" className='text-stone-500 '>Account Type

                            <span className='text-red-500'> *</span>
                        </label>
                        <div>
                            <input type="radio" id="PERSONAL (Savings)" name="accountType" value="SAVINGS" checked={selectedAccountType === 'SAVINGS'} onChange={handleAccountTypeChange} />
                            <label htmlFor="PERSONAL (Savings)" className="pl-1 text-stone-500 font-[400]">PERSONAL (Savings)</label>
                        </div>
                        <div>
                            <input type="radio" id="CURRENT" name="accountType" value="CURRENT" checked={selectedAccountType === 'CURRENT'} onChange={handleAccountTypeChange} />
                            <label htmlFor="CURRENT" className="pl-1 text-stone-500 font-[400]">CURRENT</label>
                        </div>

                        <div>
                            <input type="radio" id="CHECKING" name="accountType" value="CHECKING" checked={selectedAccountType === 'CHECKING'} onChange={handleAccountTypeChange} />
                            <label htmlFor="CHECKING" className="pl-1 text-stone-500 font-[400]">CHECKING</label>
                        </div><div>
                            <input type="radio" id="FIX DEPOSIT" name="accountType" value="FIX DEPOSIT" checked={selectedAccountType === 'FIX DEPOSIT'} onChange={handleAccountTypeChange} />
                            <label htmlFor="FIX DEPOSIT" className="pl-1 text-stone-500 font-[400]">FIX DEPOSIT</label>
                        </div>
                        <div>
                            <input type="radio" id="NON RESIDENT" name="accountType" value="NON RESIDENT" checked={selectedAccountType === 'NON RESIDENT'} onChange={handleAccountTypeChange} />
                            <label htmlFor="NON RESIDENT" className="pl-1 text-stone-500 font-[400]">NON RESIDENT</label>
                        </div>

                        <div>
                            <input type="radio" id="ONLINE BANKING" name="accountType" value="ONLINE BANKING" checked={selectedAccountType === 'ONLINE BANKING'} onChange={handleAccountTypeChange} />
                            <label htmlFor="ONLINE BANKING" className="pl-1 text-stone-500 font-[400]">ONLINE BANKING</label>
                        </div>
                        <div>
                            <input type="radio" id="DOMICILIARY ACCOUNT" name="accountType" value="DOMICILIARY ACCOUNT" checked={selectedAccountType === 'DOMICILIARY ACCOUNT'} onChange={handleAccountTypeChange} />
                            <label htmlFor="DOMICILIARY ACCOUNT" className="pl-1 text-stone-500 font-[400]">DOMICILIARY ACCOUNT</label>
                        </div>
                        <div>
                            <input type="radio" id="JOINT ACCOUNT" name="accountType" value="JOINT ACCOUNT" checked={selectedAccountType === 'JOINT ACCOUNT'} onChange={handleAccountTypeChange} />
                            <label htmlFor="JOINT ACCOUNT" className="pl-1 text-stone-500 font-[400]">JOINT ACCOUNT</label>
                        </div>

                    </div>
                    <div className="fixed w-full bottom-16 pr-8  bg-slate-100 py-2">
                        <button className='btn w-full text-lg h-14'>Transfer Funds</button>
                    </div>
                </form>
            </div>

        </>
    )
}

export default BankTransfer