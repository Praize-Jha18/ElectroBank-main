import UserNavbar from './UserNavbar'
import { Link } from 'react-router-dom'

const RequestLoan = () => {
  return (
<>
<UserNavbar header={'Loan'}/>
<div className="body py-40 font-poppins bg-slate-100 h-screen px-4 df-fldc-ac">
    <p className='text-[#958D9E] text-base pb-4 max-phone:text-sm'>Hey User Name , you can't request for loan at the moment check back later</p>
    <Link to={"/account/support"} className='btn df-ac h-14 px-16'>Request Loan</Link>
</div>
</>

)
}

export default RequestLoan