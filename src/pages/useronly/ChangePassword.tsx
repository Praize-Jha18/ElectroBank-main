import UserNavbar from './UserNavbar'
import axios from 'axios'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
const ChangePassword = () => {

interface Password{
    password1 : string,
    password2 : string,
}

    const navigate = useNavigate()
    const [password, setPassword] = useState<Password>({} as Password);
    const [message, setMessage] = useState("")

    const handleChange = (e :any)=>{
        const name = e.target.name
        const value = e.target.value

        setPassword((prev)=>({...prev, [name] : value}))
    }
    const handleSubmit = async (e : React.FormEvent)=>{
        e.preventDefault();
        try{
            const passwordOne = password.password1 // First password value
            const confirmPassword = password.password2 // Confirmed password value
            if (passwordOne != confirmPassword) {
                console.log("Passwords are not the same")
                setMessage("Passwords are not the same")
            }else{
                await axios.post('http://localhost:3000/password', { password: confirmPassword }, {withCredentials : true})
                .then((response)=>{
                    if(response.status === 200){
                        setMessage(response.data.message)
                        console.log("succesful password change")
                        
                        navigate('/account')
                    }else{
                        // toast.error(response.data.error)
                        setMessage(response.data.error)
                        navigate('account/change-password')
                    }
                }).catch((err)=>{
                    console.log(err)
                })
            }
        }catch(err){
            console.log(err)
        }
        setMessage("")
        
    }
    return (
        <>
            <UserNavbar header={'New Password'} />
            <div className="font-poppins pt-32 px-6  bg-slate-100 h-screen">
                <h1 className='text-3xl text-[#27173E] text-center pb-2'>Change Password</h1>
                <p className='text-base text-[#27173E] text-center pb-2'>Fill the form to change your password</p>
                <h2 className='text-center'>{message}</h2>
                <form className='py-12' onSubmit={handleSubmit}>
                    <div className=''>
                        <label htmlFor="newPassword" className='text-[#27173E] text-xs'>New Password</label>
                        <input type="password" className='w-full block text-black mt-1 placeholder:text-stone-500 bg-slate-100 border-b-stone-500 border-b-[1px] h-10 text-base outline-none' id="newPassword" name='password1' onChange={handleChange} value={password?.password1 || ""} placeholder='Your new password' />
                    </div>

                    <div className='mt-4'>
                        <label htmlFor="confirmPassword" className='text-[#27173E] text-xs'>Confirm Password</label>
                        <input type="password" className='w-full block text-black mt-1 placeholder:text-stone-500 bg-slate-100 border-b-stone-500 border-b-[1px] h-10 text-base outline-none' id="confirmPassword" name='password2' onChange={handleChange} value={password?.password2 || ""} placeholder='Confirm password' />
                    </div>
                    <button type="submit" className='btn w-full h-12 mt-10'>Update</button>
                </form>
            </div>
        </>
    )
}

export default ChangePassword