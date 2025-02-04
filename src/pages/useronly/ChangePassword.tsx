import UserNavbar from './UserNavbar'

const ChangePassword = () => {
    return (
        <>
            <UserNavbar header={'New Password'} />
            <div className="font-poppins pt-32 px-6  bg-slate-100 h-screen">
                <h1 className='text-3xl text-[#27173E] text-center pb-2'>Change Password</h1>
                <p className='text-base text-[#27173E] text-center pb-2'>Fill the form to change your password</p>
                <form className='py-12'>
                    <div className=''>
                        <label htmlFor="newPassword" className='text-[#27173E] text-xs'>New Password</label>
                        <input type="password" className='w-full block text-black mt-1 placeholder:text-stone-500 bg-slate-100 border-b-stone-500 border-b-[1px] h-10 text-base outline-none' id="newPassword" placeholder='Your new password' />
                    </div>

                    <div className='mt-4'>
                        <label htmlFor="confirmPassword" className='text-[#27173E] text-xs'>Confirm Password</label>
                        <input type="password" className='w-full block text-black mt-1 placeholder:text-stone-500 bg-slate-100 border-b-stone-500 border-b-[1px] h-10 text-base outline-none' id="confirmPassword" placeholder='Confirm password' />
                    </div>
                    <button type="submit" className='btn w-full h-12 mt-10'>Request Code</button>
                </form>
            </div>
        </>
    )
}

export default ChangePassword