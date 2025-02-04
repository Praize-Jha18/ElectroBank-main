import { Link } from "react-router-dom"


const Login = () => {
  return (

    <>
      <div className="w-full bg-slate-100 font-poppins dfAc h-screen">
        <form className='shadow-[0_0_8px_rgba(0,0,0,.1)] bg-white  font-poppins rounded-xl'>
          <p className='text-xl text-sky-500 text-center pt-4 '>Login</p>
          <div className="px-4">
            <div className='mt-4'>
              <label htmlFor="email" className='text-[#27173E] text-xs'>Email</label>
              <input type="email" className='w-full block text-black mt-1 placeholder:text-stone-500 border-b-stone-500 border-b-[1px] pb-4 text-base outline-none' id="email" placeholder='xyz@gmail.com' />
            </div>
            <div className='mt-4'>
              <label htmlFor="password" className='text-[#27173E] text-xs'>Password</label>
              <input type="password" className='w-full block text-black mt-1 placeholder:text-stone-500 border-b-stone-500 border-b-[1px] pb-4 text-base outline-none' id="password" placeholder='Your Password' />
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