
import { Link, useLocation } from 'react-router-dom'

const Footer = () => {
  const location = useLocation();
  const isHome = location.pathname == "/";
  // needed this so the particle wont show 
  return (
    <>
      <footer className={`${isHome && "relative"} bg-purple-100 px-10 max-phone:px-6 pt-6`}>
        <div className="links df-ac gap-6 pt-4 font-semibold pb-4 max-tab:flex-col max-tab:items-start">
          <Link to={"/contact-us"} className='footerLinks'>Financial education</Link>
          <Link to={"/ways-to-bank"} className='footerLinks'>Ways to Bank</Link>
          <Link to={"/personal/loans"} className='footerLinks'>Loans</Link>
          <Link to={"/personal/investment-solutions"} className='footerLinks'>Investment Solutions</Link>
          <Link to={"/business/business-savings-account"} className='footerLinks'>Bank Accounts</Link>
          <Link to={"/about-us"} className='footerLinks'>About Us</Link>
        </div>
        <div className="border-b-2 border-white mb-6 "></div>
        <div className="">
          <p className='font-helvetica text-[#7a7a7a] text-sm font-semibold mb-6'>
            Looking for Online Banking?
            <Link to={"/auth/register"} className='text-sky-500'> Log in to desktop site</Link>
          </p>
          <p className='font-helvetica text-[#7a7a7a] text-sm font-semibold mb-6'>
            Applying for a product?           <Link to={"/auth/register"} className='text-sky-500'> Check application status  </Link>
          </p>
        </div>

        <div className="border-4 border-[#7a7a7a] pt-3 pl-3 mb-6">
          <p className="text-[#7a7a7a] text-sm font-sans font-semibold mb-6">
            Investment and insurance products, including annuities, are:
          </p>
          <p className="text-[#7a7a7a] text-sm font-sans font-semibold mb-6">
            Not a Deposit • Not FDIC Insured • May Lose Value • Not Bank Guaranteed • Not Insured by any Federal Government Agency
          </p>
        </div>

        <p className="font-helvetica text-[#7a7a7a] text-sm font-semibold mb-6">
          EliteOceanic Savings Investments and their representatives do not provide tax or legal advice. Each individual’s tax and financial situation is unique. Please consult your tax or legal advisor for advice specific to your situation.
        </p>
        <p className="font-helvetica text-[#7a7a7a] text-sm font-semibold mb-6">
          For EliteOceanic Savings Investments:
        </p>
        <p className="font-helvetica text-[#7a7a7a] text-sm font-semibold mb-6">
          Investment and insurance products, including annuities, are offered through EliteOceanic Savings Investments, the trade name for EliteOceanic Savings Investments, Inc., a member of FINRA and SIPC, and a brokerage subsidiary of Ace International, an affiliate of EliteOceanic Savings.
        </p>
        <p className="font-helvetica text-[#7a7a7a] text-sm font-semibold mb-6">
          For EliteOceanic Savings:
        </p>
        <p className="font-helvetica text-[#7a7a7a] text-sm font-semibold mb-6">
          EliteOceanic Savings is not responsible for, nor does it guarantee, the products, services, or performance of EliteOceanic Savings Investments.
        </p>

        <div className="border-4 border-[#7a7a7a] pt-3 pl-3">
          <p className="text-[#7a7a7a] text-sm font-sans font-semibold mb-6">
            Mortgage, home equity, and credit products are offered by Premier Sea Bank National Association.
          </p>
          <p className="text-[#7a7a7a] text-sm font-sans font-semibold mb-6">
            Deposit products are offered by Premier Sea Bank National Association, Member FDIC.
          </p>
        </div>

        <div>
          <p className="font-helvetica text-[#54595f] text-sm font-semibold mb-6 mt-4">
            The creditor and issuer of EliteOceanic Savings credit cards is EliteOceanic Savings Association, under separate licenses from Visa U.K. Inc., MasterCard International Inc., and American Express. American Express is a federally registered service mark of American Express.
          </p>
          <p className="font-helvetica text-[#54595f] text-sm font-semibold mb-6">Equal Housing Lender</p>
          <p className="font-helvetica text-[#54595f] text-sm font-semibold mb-6">
            EliteOceanic Savings, 28 Prescott Street, Halifax, England, HX1 2LG
          </p>
          <p className="font-helvetica text-[#54595f] text-sm font-semibold pb-6">
            © 2022 EliteOceanic Savings
          </p>
        </div>

      </footer>
    </>)
}

export default Footer