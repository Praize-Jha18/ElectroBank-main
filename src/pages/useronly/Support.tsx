import UserNavbar from './UserNavbar'
import contact from '../../assets/contact.png'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast, ToastContainer, Id } from "react-toastify";
import axios from 'axios'
const Support = () => {
  const navigate = useNavigate();
  const [mailForm, setMailForm] = useState({})
  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [message,setMessage] = useState("")

  const handleChange = (e:any)=>{
    const name = e.target.name
    const value = e.target.value

    setMailForm((values)=>({...values, [name] : value}))
  }

  const submitForm = async (e : React.FormEvent)=>{
    e.preventDefault();
    await axios.post('http://localhost:3000/support',{mailForm},{ withCredentials: true, })
    .then((response)=>{
      console.log(response.data.message)
      setMessage(response.data.message)
      setMailForm({})
      setTimeout(() => {
        setMessage("")
      }, 5000);
    }).catch((error)=>{
      console.log(error)
    })

  }

    //============== Verifying if User is logged in ============== //
    useEffect(() => {
      const toastId: Id = toast.info("Please wait, fetching user data...", { autoClose: false, closeOnClick: false });
      axios
      .get("http://localhost:3000/getUser", { withCredentials: true })
      .then((response) => {
          if (response) {
          const User = response.data.user;
          console.log(User)
          setUsername(User.name)
          setEmail(User.email)
        
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

  return (
<>
<ToastContainer />
<UserNavbar header={'Support'}/>
<div className="body bg-slate-100 font-poppins pt-24 pb-24 px-6">
  <div className=" df-fldc-ac">
   <p className='text-[#27173E] text-base mb-3'>Contact Support</p>
  <img src={contact} alt="contact-us" className='h-48'/>
  <div className="border-b my-4 border-[#958d9e] w-full"></div>
  <p className='text-[#958d9e] text-center'>Get in touch with us by simply filling out the form below. We will be more than happy to hear from you.</p>
   
  </div>
  <h1 className='text-center text-[green]'>{message}</h1>
  <form action="" onSubmit={submitForm}>
  <div className="mt-4">
            <label htmlFor="fullName" className="text-[#27173E] text-xs">First Name</label>
            <input type="text" className="registerInputStyle" id="fullName" name='name' value={mailForm.name || username} onChange={handleChange} placeholder="First Name" />
          </div>
  <div className='mt-4'>
          <label htmlFor="email" className='text-[#27173E] text-xs'>Email</label>
          <input type="email" className='
          w-full block text-black mt-1 placeholder:text-stone-500 bg-slate-100 border-b-stone-500 border-b-[1px] pb-4 text-base outline-none' name='email' onChange={handleChange} value={mailForm.email || email} id="email" placeholder='xyz@gmail.com' />
        </div>
        <div className="mt-4">
  <div className="mt-4">
      <label htmlFor="fullName" className="text-[#27173E] text-xs">Subject</label>
      <input type="text" className="registerInputStyle" id="fullName" name='subject' value={mailForm.subject || ""} onChange={handleChange} placeholder="e.g Loan request, Deposit request, Support" />
    </div>
<textarea className='w-full block resize-none text-black mt-4 placeholder:text-stone-500 bg-slate-100 border-b-stone-500 border-b-[1px] pb-12  text-base outline-none' name='message' onChange={handleChange} value={mailForm.message || ""} placeholder='Message' >
</textarea>
          </div>

          <button type="submit" className="btn w-full text-lg h-14 mt-6">Register</button>
  </form>
</div>
</>
)
}

export default Support