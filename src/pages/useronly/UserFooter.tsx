import { Link } from 'react-router-dom'
import { DocumentTextOutline, HomeOutline, SettingsOutline, SwapVertical } from 'react-ionicons'

const footerLinks: { to: string, link: string, icon: JSX.Element }[] = [
    { to: "", link: "Home", icon: <HomeOutline /> },
    { to: "/account/account-statement", link: "Transactions", icon: <DocumentTextOutline /> },
    { to: "/account/domestic-transfer", link: "Transfer", icon: <SwapVertical /> },
    { to: "/account/profile", link: "Settings", icon: <SettingsOutline /> },
]
const UserFooter = () => {
    return (
        <>
            <div className="df-jsb-ac gap-5 fixed w-full bottom-0 px-[6%] bg-white shadow-[0_0_4px_rgba(0,0,0,.4)] py-[.5rem]">
                {
                    footerLinks.map((value, key) => (
                        <div className="dfAc" key={key}>
                            <Link className="text-[.8rem] font-poppins max-phone:text-[.7rem]  text-center w-full  flex  flex-col items-center justify-center" to={value.to}>
                                <div className="">{value.icon}</div>
                                <p className='mt-1 text-center'>{value.link}</p>
                            </Link></div>)
                    )
                }
            </div>
        </>)
}

export default UserFooter