import UserNavbar from './UserNavbar'
import img from '../../assets/delay-icon.png'
import { Link } from 'react-router-dom'
const Fund = () => {
    return (
        <>
            <UserNavbar header={'Fund'} />
            <div className="font-poppins pt-36 df-fldc-ac px-4">
                <img src={img} alt="delay-icon" className='w-32 mb-4' />
                <p className='text-[#958d9e] text-center text-base pt-4'>Dear John Doe, We are experiencing an unexpected delay in confirming this medium of funding, kindly make use of another accessible deposit option.</p>
                <Link to={"../deposit"} className='btn mt-5 py-2 px-8 text-base'>Back</Link>
            </div>
        </>
    )
}

export default Fund