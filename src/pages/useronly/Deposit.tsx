import UserNavbar from './UserNavbar'
import { faAmazonPay, faBitcoin, faCcPaypal, faCcVisa, faGooglePay, faStripe, IconDefinition } from '@fortawesome/free-brands-svg-icons'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Deposit = () => {
    const items: {
        text: string;
        svg: IconDefinition;
        to: string;
    }[] = [
            { text: "Stripe", svg: faStripe, to: "/account/fund" },
            { text: "Paypal", svg: faCcPaypal, to: "/account/fund" },
            { text: "BitCoin", svg: faBitcoin, to: "/account/fund" },
            { text: "Visa", svg: faCcVisa, to: "/account/fund" },
            { text: "Amazon", svg: faAmazonPay, to: "/account/fund" },
            { text: "Google", svg: faGooglePay, to: "/account/fund" },
        ]
    return (
        <>
            <UserNavbar header={'Deposit'} />
            <div className="body px-32 h-screen max-mdLap:px-24 max-tab:px-16 max-mdPhone:px-8 bg-slate-100 font-poppins">
                <div className=" pb-4 pt-40 df-fldc-ac ">
                    <h3 className='text-[#27173E] pb-4 text-base'>Quick Announcement</h3>
                    <p className='text-[#958D9E] text-base max-tab:text-sm'>Please note that some methods of deposit are not available at the moment, kindly bear with us as we are currently fixing this issue.
                    </p>
                </div>
                <div className="depositVia ">
                    <h3 className=' text-[#27173E]  text-lg pt-6 pb-4'>Deposit Via</h3>
                    <div className="items flex  gap-x-4 max-phone:gap-x-2 ">
                        {
                            items.slice(0, 3).map((item, key) => (
                                <Link to={item.to} key={key} className='shadow-[0_0_4px_#e5e7eb] w-full 
                            hover:shadow-[0_0_8px_#e5e7eb]
                                          text-center   flex  flex-col items-center justify-center py-5  bg-white rounded-lg   transition-shadow
'>
                                    <FontAwesomeIcon className=" text-[#27173E] text-xl " icon={item.svg} />
                                    <h2 className="text-[#958D9E] pt-4 text-sm">{item.text}</h2>
                                </Link>
                            ))
                        }
                    </div>    <div className="items flex pt-2 gap-x-4 max-phone:gap-x-2 ">
                        {
                            items.slice(3, 6).map((item, key) => (
                                <Link to={item.to} key={key} className='shadow-[0_0_4px_#e5e7eb] w-full 
                            hover:shadow-[0_0_8px_#e5e7eb]
                                          text-center   flex  flex-col items-center justify-center py-5  bg-white rounded-lg   transition-shadow
'>
                                    <FontAwesomeIcon className=" text-[#27173E] text-xl " icon={item.svg} />
                                    <h2 className="text-[#958D9E] pt-4 text-sm">{item.text}</h2>
                                </Link>
                            ))
                        }
                    </div>
                </div>


            </div>
        </>)
}

export default Deposit