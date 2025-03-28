import {useState ,useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { toast, ToastContainer , Id} from 'react-toastify';
import { format } from "date-fns";
import { useLocation } from 'react-router-dom';
import { Pencil, CloseCircle } from 'react-ionicons';
import { FiMenu } from "react-icons/fi";
function AdminDashboard() {
  interface User {
    name: string;
    _id : string;
    age: number;
    country: string;
    address?: string;
    user_name: string;
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
    last_login?: string;
    role: string;
  }
  interface Transaction{
    amount: number;
    beneficiary_name : string;
    beneficiary_acc_num : string;
    beneficiary_acc_type : string;
    status: string;
    reference: string;
    createdAt: string;
    sender_name: string;
    sender_acc_num: string;
    sender_acc_type: string;
    transaction_id: string;
  }
    const [users, setUsers] = useState<User[]>([])
    const [transactions, setTransactions] = useState<Transaction[]>([])
    const [showMore, setShowMore] = useState(false)
    const [showNav, setShowNav] = useState(false)
    const [showPage, setShowPage] = useState("user")
    const [editedBalance, setEditBalance] = useState("")
    const [triggerFetch, setTriggerFetch] = useState(false);
    const [editingUserId, setEditingUserId] = useState<string | null>(null);
    const [role, setRole] = useState("")
    const navigate = useNavigate();
    const location = useLocation();
    const isAdmin = location.state?.isAdmin || false; 

    const handleEditClick = (userId: string) => {
      setEditingUserId(userId === editingUserId ? null : userId); 
    };

    const formatDate = (isoDate: string) => {
      return format(new Date(isoDate), "EEEE, MMMM do, yyyy h:mm a");
    };

    useEffect(()=>{
      const toastId: Id = toast.info("Please wait, fetching user data...", { autoClose: false, closeOnClick: false });
      axios.get("https://electrobank-main.onrender.com/admin", { withCredentials: true })
      .then((res) => {
          if (res.status === 200) {
            toast.dismiss(toastId)
            console.log(res)
            setUsers(res.data.users)
            setTransactions(res.data.transaction)
          }
      })
      .catch((error) => {
          console.error("Admin access error:", error.response?.data || error);
          navigate("/auth/login");
      });
    },[triggerFetch])


    const handleSubmit = (userID : string)=>{
      handleEditClick("")
      const form = {userID, editedBalance, role}
      axios.post('https://electrobank-main.onrender.com/admin-edit', form,{withCredentials : true})
      .then((res)=>{
        console.log(res.data.message)
        toast.success(res.data.message)
        setEditBalance('');
        setRole('');

        setTriggerFetch(prev => !prev); 
      })
      .catch((err)=>{
        const message = err.response?.data?.message || "Something went wrong"
        toast.error(message)
        console.log(message)
      })
    }
    const handleDelete = (userID : any)=>{
      const shouldDelete = prompt("Are you sure you want to delete this user?")
      if (shouldDelete == 'yes'){
        axios.delete('https://electrobank-main.onrender.com/admin-delete' ,
        {
          data: { userID }, 
          withCredentials: true,
        })
        .then((res)=>{
          console.log(res.data.message)
          toast.success(res.data.message)
          setTriggerFetch(prev => !prev); 

        })
        .catch((err)=>{
           const message = err.response?.data?.message || "Something went wrong"
           toast.error(message)
          console.log(message)
        })
      }
    }

    const logout = async () => {
      try {
        const response = await axios.get("https://electrobank-main.onrender.com/logout", {
          withCredentials: true, // Ensure cookies are included
        });
    
        if (response.status === 201) {
          toast.success("Logout successful"); // Show a toast message
          window.location.assign("/");
        }
      } catch (error) {
        toast.error("Logout failed, please try again.");
        console.error("Logout error:", error);
      }
    };
    console.log("Users", users, "Transaction", transactions)
    if (!isAdmin) return null;
  return (
    <>
    <ToastContainer />
    <main className='w-full h-auto'>
      <aside className={`h-[100vh] pt-10 font-poppins fixed z-99 md:left-0 left-[100%] transition-[0.4s]  font-medium text-[20px] w-[50%] ${showNav ? `left-0` : `left-[100%]`} md:w-[20%] bg-sky-400 flex flex-col gap-10 item-center`}>
        <div className='w-[60%] mx-auto text-center '>
        <CloseCircle width={30} color={`#FFFFFF`} onClick={()=>{setShowNav(false)}}/>
        </div>
        
        <div className='h-[20%] mt-20 md:w-[50%] w-[80%] mx-auto flex flex-col justify-between'>
          <h1 className='text-white text-center cursor-pointer' onClick={()=>setShowPage("user")}>Users</h1>
          <h1 className='text-white text-center cursor-pointer' onClick={()=>setShowPage("transaction")}>Transactions</h1>
        </div>
        <div onClick={logout} className='h-[40%] md:w-[90%] w-[80%] flex flex-col justify-end mx-auto'>
          <h1 className='text-white text-center cursor-pointer'>Logout</h1>
        </div>
      </aside>
     <section className='md:ml-[20%]'>
      <nav className='h-[60px] flex items-center w-[95%] justify-between mx-auto font-poppins'>
        <h1 className='text-[18px] font-bold text-[#7a7a7a]'>Welcome, Admin</h1>
        <FiMenu size={24} className={`md:hidden block text-sky-400`} onClick={()=>setShowNav(true)}/>
      </nav>
      <article className={`w-[95%] mx-auto mt-5 User ${showPage == 'user' ? `block` : `hidden`}`}>
        <h1 className='text-[50px] font-quicksand font-bold'>Users ({users.length})</h1>
        {users && users.length > 0 ? ( users.map((user)=> (
        <div key={user._id} className={`user-box w-[100%] relative px-5 py-2 transition-[0.4s] overflow-hidden mt-10 ${showMore ? `h-[450px]` : `h-[250px]`} rounded-md shadow-[0px_7px_29px_0px_rgba(100,100,111,0.2)]`}>
        <div className='flex items-center justify-between'>
          <div className='flex items-center gap-2'>
            <img src={`https://electrobank-main.onrender.com/images/${user.profile_photo}` } alt="" className='w-[50px] h-[50px] object-contain rounded-full' />
            <h5 className='text-[#7a7a7a] font-poppins'>{user.name}</h5>
          </div>
          <div className='flex gap-5 items-center w-[60%] justify-end pr-2'>
            <button onClick={()=>handleDelete(user._id)} className='w-[10%] h-[40px] font-poppins text-[13px] bg-red-600 text-white rounded-md'>Delete</button>
            <button onClick={()=>handleSubmit(user._id)} className="text-white w-[10%] h-[40px] font-poppins text-[13px]  bg-sky-400 rounded-md">Submit</button>  
          </div>
          
        </div>
        <div className='flex justify-between'>
            <div className='text-[#7a7a7a] font-poppins'>
              <h5 className='mt-5 flex items-center'>Account: 
                 <span className='pl-1 cursor-pointer'onClick={() => handleEditClick(user._id)}><Pencil width={'15px'} color={'#7a7a7a'}/></span>
                <span className={`${editingUserId === user._id ? 'hidden' : 'block'}`}>₦{user.current_balance}</span>
                <span  className={`flex gap-2 ${editingUserId === user._id ? 'block' : 'hidden'}`}>
                  <input className={`w-[60%] outline-none border-2  border-sky-400 `} type="number" value={editedBalance} placeholder={user.current_balance.toString()} onChange={(e : any)=>{setEditBalance(e.target.value)}} />
                  {/* <button onClick={()=>handleSubmit(user._id)} className="text-white bg-sky-400 px-2 rounded-md">Submit</button>   */}
                </span>
              </h5>
              <h5 className='mt-5'>Age: <span>{user.age}</span></h5>
              <h5 className='mt-5'>Phone Number: <span>{user.phone}</span></h5>
              <h5 className='mt-5'>Country: <span>{user.country}</span></h5>
              <h5 className='mt-5'>address: <span>{user.address}</span></h5>
              <h5 className='mt-5'>Occupation: <span>{user.occupation}</span></h5>
              <h5 className='mt-5'>Date of birth: <span>{formatDate(user.DOB)}</span></h5>
             
            </div>
            <div className='text-[#7a7a7a] font-poppins'>
                <h5 className='mt-5'>isVerified: {user.activated ? <span>Yes</span> : <span>No</span> } </h5>
                <h5 className='mt-5'>Email: <span>{user.email}</span></h5>
                <h5 className='mt-5'>Gender: <span>{user.gender}</span></h5>
                <h5 className='mt-5'>username: <span>{user.user_name}</span></h5>
                <h5 className='mt-5'>Account type: <span>{user.account_type}</span></h5>
                <h5 className='mt-5'>Marital Status: <span>{user.marital_status}</span></h5>
                <h5 className='mt-5 flex items-center'>Role : 
                <span className='pl-1 cursor-pointer' onClick={() => handleEditClick(user._id)}><Pencil width={'15px'} color={'#7a7a7a'}/></span>
                <span className={`${editingUserId === user._id ? 'hidden' : 'block'}`}>{user.role}</span>
                <span className={`flex gap-2 ${editingUserId === user._id ? 'block' : 'hidden'}`}>
                  <input className={`w-[60%] outline-none border-2  border-sky-400 `} type="number" value={role} placeholder={user.role.toString()} onChange={(e : any)=>{setRole(e.target.value)}} />
                </span>
              </h5>
            </div>
        </div>
        <span onClick={()=>setShowMore(true)} className={`text-sky-400 mt-2 bottom-0 ${showMore ? `hidden` : `block` }  absolute cursor-pointer font-poppins`}>more...</span>
        <span onClick={()=>setShowMore(false)} className={`text-sky-400 bottom-0 ${showMore ? `block` : `hidden` }  absolute cursor-pointer font-poppins`}>less...</span>
         
          
        </div>  )))  : <h1>No User...</h1>}
      </article>
      <article className={`Transaction w-[95%] ${showPage == 'transaction' ? `block` : `hidden`} mx-auto mt-5`}>
        <h1 className='text-[50px] font-quicksand font-bold'>Transactions ({transactions.length})</h1>
        {transactions && transactions.length > 0 ? ( transactions.map((transac)=>(
        <div key={transac.transaction_id} className={`mt-10 px-5 py-2 text-[#7a7a7a] font-poppins rounded-md shadow-[0px_7px_29px_0px_rgba(100,100,111,0.2)]`}>
          <h5 className='mt-5'>Transaction_id: <span>{transac.transaction_id}</span></h5>
          <h5 className='mt-5'>Creditor Name: <span>{transac.sender_name}</span></h5>
          <h5 className='mt-5'>Creditor Account Num: <span>{transac.sender_acc_num}</span></h5>
          <h5 className='mt-5'>Beneficiary Name: <span>{transac.beneficiary_name}</span></h5>
          <h5 className='mt-5'>Beneficiary Account Num: <span>{transac.beneficiary_acc_num}</span></h5>
          <h5 className='mt-5'>Status: <span>{transac.status}</span></h5>
          <h5 className='mt-5'>Amount: <span>{transac.amount}</span></h5>
          <h5 className='mt-5'>Refrence: <span>{transac.reference}</span></h5>
          <h5 className='mt-5'>Date of Transaction: <span>{formatDate(transac.createdAt)}</span></h5>
        </div>
        ))) : <h1>No transaction...</h1>}
      </article>
     </section>
    </main>
    </>
    
  )
}

export default AdminDashboard