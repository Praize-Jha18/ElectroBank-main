import { Link, useNavigate } from "react-router-dom"
import { useState} from "react"
import axios from'axios';
import { toast, ToastContainer, Id } from "react-toastify";


const Login = () => {
  

  const [message, setMessage] = useState("")
  const [Form, setForm] = useState({
    email : "",
    password : ""
  })
  const navigate = useNavigate();
  const handleSubmit = async (e : React.FormEvent)=>{
    e.preventDefault();
    try {
      const toastId: Id = toast.info("Please wait, verifying user...", {
        autoClose: false,
        closeOnClick: false,
      });
      const response = await axios.post("https://electrobank-main.onrender.com/login", Form, {
        headers: { "Content-Type": "application/json" },
        withCredentials: true,
      });
    
      if (response.status === 201) {
        navigate("/account");
        toast.dismiss(toastId)
        toast.info("Logged in successfully")
      }else{
        toast.info(response.data.message)
      }
    } catch (error: any) {
      // Handle backend error message
        console.error(error.response.data.error);
      
    }
    

    
  }
  return (

    <>
    
    <ToastContainer />
      <div className="w-full bg-slate-100 font-poppins dfAc h-screen">
        <form className='shadow-[0_0_8px_rgba(0,0,0,.1)] bg-white  font-poppins rounded-xl' onSubmit={handleSubmit}>
          <p className='text-xl text-sky-500 text-center pt-4 '>Login</p>
         
          <div className="px-4">
            <div className='mt-4'>
            <h1 className="text-[20px]">{message}</h1>
              <label htmlFor="email" className='text-[#27173E] text-xs'>Email</label>
              <input type="email" className='w-full block text-black mt-1 placeholder:text-stone-500 border-b-stone-500 border-b-[1px] pb-4 text-base outline-none' onChange={(e)=>setForm((prevState)=>({...prevState, email : e.target.value}))} value={Form.email} id="email" placeholder='xyz@gmail.com' />
            </div>
            <div className='mt-4'>
              <label htmlFor="password" className='text-[#27173E] text-xs'>Password</label>
              <input type="password" className='w-full block text-black mt-1 placeholder:text-stone-500 border-b-stone-500 border-b-[1px] pb-4 text-base outline-none' onChange={(e)=>setForm((prevState)=>({...prevState, password : e.target.value}))} value={Form.password}  id="password" placeholder='Your Password' />
            </div>
            <div className="df-jsb-ac pt-4 gap-16">
              <Link to={"/auth/register"} className="text-purple-500 text-base">Register</Link>
              <Link to={"/auth/login"} className="text-[#958d9e] text-base">Forgot Password?</Link>
            </div>
          </div>
         

          <div className="px-4  py-6">
            <button className='btn  text-lg h-14 w-full'>Login</button>
          </div>
        </form>
      </div>

    </>
  )
}

export default Login