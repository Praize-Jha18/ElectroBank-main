import UserNavbar from './UserNavbar'
import contact from '../../assets/contact.png'
const Support = () => {
  return (
<>
<UserNavbar header={'Support'}/>
<div className="body bg-slate-100 font-poppins pt-24 pb-24 px-6">
  <div className=" df-fldc-ac">
   <p className='text-[#27173E] text-base mb-3'>Contact Support</p>
  <img src={contact} alt="contact-us" className='h-48'/>
  <div className="border-b my-4 border-[#958d9e] w-full"></div>
  <p className='text-[#958d9e] text-center'>Get in touch with us by simply filling out the form below. We will be more than happy to hear from you.</p>
   
  </div>
  <form action="">
  <div className="mt-4">
            <label htmlFor="fullName" className="text-[#27173E] text-xs">First Name</label>
            <input type="text" className="registerInputStyle" id="fullName" placeholder="First Name" />
          </div>
  <div className='mt-4'>
          <label htmlFor="email" className='text-[#27173E] text-xs'>Email</label>
          <input type="email" className='
          w-full block text-black mt-1 placeholder:text-stone-500 bg-slate-100 border-b-stone-500 border-b-[1px] pb-4 text-base outline-none' id="email" placeholder='xyz@gmail.com' />
        </div>
        <div className="mt-4">
<textarea className='w-full block resize-none text-black mt-1 placeholder:text-stone-500 bg-slate-100 border-b-stone-500 border-b-[1px] pb-12  text-base outline-none' placeholder='Message' >
</textarea>
          </div>

          <button type="submit" className="btn w-full text-lg h-14 mt-6">Register</button>
  </form>
</div>
</>
)
}

export default Support