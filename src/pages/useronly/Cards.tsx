import UserNavbar from './UserNavbar'
import { Link } from 'react-router-dom'

const Cards = () => {
  return (
<>
<UserNavbar header={'Cards'}/>
<div className="body py-40 font-poppins bg-slate-100 h-screen px-4 df-fldc-ac">
    <p className='text-[#958D9E] text-base pb-4 max-phone:text-sm'>Hey User Name , you have no card at the moment</p>
    <Link to={"/account/support"} className='btn df-ac h-14 px-16'>Request Cards</Link>
</div>
</>  )
}

export default Cards