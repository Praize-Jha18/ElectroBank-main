import  { useMemo, useState } from 'react'
import Select from "react-select";
import countryList from "react-select-country-list";
import UserNavbar from './UserNavbar'
import customSelectStyles from './customStyle';

const DomesticTransfer = () => {
    const [selectedAccountType, setSelectedAccountType] = useState('');
    const options = useMemo(() => countryList().getData(), []);
const [selectedCountry,setSelectedCountry] = useState(null)
 
const countryChangeHandler = (selectedOption: any) => {
    setSelectedCountry(selectedOption);
  };
 


const handleAccountTypeChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
        setSelectedAccountType(event.target.value);
    };
    return (
        <>
            <UserNavbar header={'Domestic Transfer'} />
            <div className="body pt-32 pb-40 font-poppins bg-slate-100 h-full">
                <h1 className='text-[#27173E] text-center text-3xl font-semibold pb-2'>Send Money</h1>
                <h3 className='text-[#27173E] text-center text-base font-medium pb-3'>Fill the form carefully</h3>

                <form className='px-4 '>

                    <div className='mt-4 '>
                        <label htmlFor="amount" className='text-[#27173E] text-xs'>Amount $</label>
                        <input type="text" className='w-full block text-black mt-1 placeholder:text-stone-500 bg-slate-100 border-b-stone-500 border-b-[1px] h-10 text-base outline-none' id="amount" placeholder='e.g 345678' />
                    </div>
                    <div className='mt-4'>
                        <label htmlFor="accountName" className='text-[#27173E] text-xs'>Beneficiary Account Name </label>
                        <input type="text" className='w-full block text-black mt-1 placeholder:text-stone-500 bg-slate-100 border-b-stone-500 border-b-[1px] h-10 text-base outline-none' id="accountName" placeholder='Beneficiary Account Name' />
                    </div>
                    <div className='mt-4'>
                        <label htmlFor="accountNumber" className='text-[#27173E] text-xs'>Beneficiary Account Number</label>
                        <input type="text" className='w-full block text-black mt-1 placeholder:text-stone-500 bg-slate-100 border-b-stone-500 border-b-[1px] h-10 text-base outline-none' id="accountNumber" placeholder='Beneficiary Account Number' />
                    </div>
                    <div className='mt-4'>
                        <label htmlFor="bankName" className='text-[#27173E] text-xs'>Bank Name</label>
                        <input type="text" className='w-full block text-black mt-1 placeholder:text-stone-500 bg-slate-100 border-b-stone-500 border-b-[1px] h-10 text-base outline-none' id="bankName" placeholder='Bank Name' />
                    </div>
                         {/* Country */}
          <div className="mt-4">
            <label htmlFor="country" className="text-[#27173E] text-xs">Select Country</label>
            <Select
              options={options}
              value={selectedCountry}
              onChange={(value) => countryChangeHandler(value)}
              styles={customSelectStyles}
              placeholder="Select a country"
            />
          </div>
                    <div className='mt-4'>
                        <label htmlFor="swiftCode" className='text-[#27173E] text-xs'>Swift Code</label>
                        <input type="text" className='w-full block text-black mt-1 placeholder:text-stone-500 bg-slate-100 border-b-stone-500 border-b-[1px] h-10 text-base outline-none' id="swiftCode" placeholder='Swift code' />
                    </div>
                    <div className='mt-4'>
                        <label htmlFor="description" className='text-[#27173E] text-xs'>Description</label>
                        <input type="text" className='w-full block text-black mt-1 placeholder:text-stone-500 bg-slate-100 border-b-stone-500 border-b-[1px] pb-4 text-base outline-none' id="description" placeholder='Description' />
                    </div>
                    <div className="mt-4">
                        <label htmlFor="accountType" className='text-stone-500 '>Account Type

                            <span className='text-red-500'> *</span>
                        </label>
                        <div>
                            <input type="radio" id="PERSONAL (Savings)" name="accountType" value="PERSONAL (Savings)" checked={selectedAccountType === 'PERSONAL (Savings)'} onChange={handleAccountTypeChange} />
                            <label htmlFor="PERSONAL (Savings)" className="pl-1 text-stone-500 font-[400]">PERSONAL (Savings)</label>
                        </div>
                        <div>
                            <input type="radio" id="CURRENT" name="accountType" value="CURRENT" checked={selectedAccountType === 'CURRENT'} onChange={handleAccountTypeChange} />
                            <label htmlFor="CURRENT" className="pl-1 text-stone-500 font-[400]">CURRENT</label>
                        </div>

                        <div>
                            <input type="radio" id="CHECKING" name="accountType" value="CHECKING" checked={selectedAccountType === 'CHECKING'} onChange={handleAccountTypeChange} />
                            <label htmlFor="CHECKING" className="pl-1 text-stone-500 font-[400]">CHECKING</label>
                        </div><div>
                            <input type="radio" id="FIX DEPOSIT" name="accountType" value="FIX DEPOSIT" checked={selectedAccountType === 'FIX DEPOSIT'} onChange={handleAccountTypeChange} />
                            <label htmlFor="FIX DEPOSIT" className="pl-1 text-stone-500 font-[400]">FIX DEPOSIT</label>
                        </div>
                        <div>
                            <input type="radio" id="NON RESIDENT" name="accountType" value="NON RESIDENT" checked={selectedAccountType === 'NON RESIDENT'} onChange={handleAccountTypeChange} />
                            <label htmlFor="NON RESIDENT" className="pl-1 text-stone-500 font-[400]">NON RESIDENT</label>
                        </div>

                        <div>
                            <input type="radio" id="ONLINE BANKING" name="accountType" value="ONLINE BANKING" checked={selectedAccountType === 'ONLINE BANKING'} onChange={handleAccountTypeChange} />
                            <label htmlFor="ONLINE BANKING" className="pl-1 text-stone-500 font-[400]">ONLINE BANKING</label>
                        </div>
                        <div>
                            <input type="radio" id="DOMICILIARY ACCOUNT" name="accountType" value="DOMICILIARY ACCOUNT" checked={selectedAccountType === 'DOMICILIARY ACCOUNT'} onChange={handleAccountTypeChange} />
                            <label htmlFor="DOMICILIARY ACCOUNT" className="pl-1 text-stone-500 font-[400]">DOMICILIARY ACCOUNT</label>
                        </div>
                        <div>
                            <input type="radio" id="JOINT ACCOUNT" name="accountType" value="JOINT ACCOUNT" checked={selectedAccountType === 'JOINT ACCOUNT'} onChange={handleAccountTypeChange} />
                            <label htmlFor="JOINT ACCOUNT" className="pl-1 text-stone-500 font-[400]">JOINT ACCOUNT</label>
                        </div>

                    </div>
                    <div className="fixed w-full bottom-16 pr-8  bg-slate-100 py-4">
                        <button className='btn w-full text-lg h-14'>Transfer Funds</button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default DomesticTransfer