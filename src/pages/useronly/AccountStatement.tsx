import UserNavbar from './UserNavbar'

const AccountStatement = () => {
    return (<>
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