import { useMemo, useState } from 'react'
import Select from "react-select";
import countryList from "react-select-country-list";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { CheckmarkCircleOutline } from 'react-ionicons'
import UserNavbar from './UserNavbar'
import img from '../../assets/avatar1.png'
const UserProfile = () => {
  const options = useMemo(() => countryList().getData(), []);
  const nigeria = options.find(country => country.label === 'Nigeria');
  const [selectedCountry, setSelectedCountry] = useState(nigeria);
  const countryChangeHandler = (selectedOption: any) => {
    setSelectedCountry(selectedOption);
  };
  const customSelectStyles = {
    control: (provided: any) => ({
      ...provided,
      width: '100%',
      backgroundColor: 'white',
      border: 'none',
      borderBottom: '1px solid #78716c',
      borderRadius: "0",
      paddingBottom: '.1rem',
      fontSize: '1rem',
      outline: 'none',
      boxShadow: 'none',
    }),
    placeholder: (provided: any) => ({
      ...provided,
      color: '#78716c',
    }),
    singleValue: (provided: any) => ({
      ...provided,
      color: '#000000',
    }),
    menu: (provided: any) => ({
      ...provided,
      backgroundColor: '#f1f5f9',
      width: '100%',
    }),
  };
  const userDetails: { details: string, value: string }[] = [
    {
      details: "Full Name", value: "John Doe"
    },
    {
      details: "Account Number", value: "687751162"
    },
    {
      details: "Phone Number", value: "+2348123456789"
    },
    {
      details: "Email Address", value: "xyz@gmail.com"
    },
    {
      details: "Country", value: "Nigeria"
    },
    {
      details: "Occupation", value: "johndoe"
    },

  ]
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <UserNavbar header={'Profile'} />

      <div className="body bg-slate-100 font-poppins pt-24 pb-24 px-6">
        <div className=' dfAc'>
          <picture className='p-2 rounded-full shadow-[0_0_15px_rgba(0,0,0,.1)] '>
            <img src={img} alt="Avatar" className='h-24 w-24' />
          </picture>
        </div>
        <div className="details shadow-[0_0_15px_rgba(0,0,0,.1)] px-4 mt-8 rounded-xl">
          {userDetails.map((v, i) => (
            <div key={i} className='df-jsb-ac text-[#27173E]  text-base border-b border-[#958d9e] py-3'>
              <p>{v.details}</p>
              <p>{v.value}
                <FontAwesomeIcon icon={faChevronRight} className='pl-2 text-[#958d9e]' />
              </p>
            </div>
          ))}
          <div className='df-jsb-ac text-[#27173E]  text-base border-b border-[#958d9e] py-3'>
            <p>Registered</p>
            <p className='flex'>
              <span className='text-sm flex gap-1 text-[#a855f7]'>
                verified  <CheckmarkCircleOutline color={"#a855f7"} /></span>
              <FontAwesomeIcon icon={faChevronRight} className='pl-2 text-[#958d9e]' />
            </p>
          </div>
          <div className="dfAc pt-2 pb-4">

            <button className='btn text-base  px-12
            py-3'onClick={() => setShowModal(true)}>Edit Account</button>
          </div>
        </div>
      </div>
      {showModal &&

        <div className="modalContainer bg-black bg-opacity-25 fixed h-screen w-screen top-0 z-30 dfAc " onClick={() => setShowModal(false)}>
          <div className="modal bg-white rounded-md" onClick={(e) => e.stopPropagation()}>
            <p className='font-poppins text-base text-[#27173e] p-4 border-b border-[#958d9e]'>Edit Account</p>
            <div className="df-fldc gap-[6px] p-4">
              <div className="df-fldc gap-1">
                <label className='font-poppins text-[#958d9e] text-base' htmlFor="firstName">First Name</label>
                <input className='w-96 max-tab:w-84 max-mdPhone:w-72 max-phone:w-60 px-2 py-1 border border-[#958d9e] rounded' type="text" name="" value="John" id="firstName" />
              </div>

              <div className="df-fldc gap-1">
                <label className='font-poppins text-[#958d9e] text-base' htmlFor="firstName">Last Name</label>
                <input className='w-96 max-tab:w-84 max-mdPhone:w-72 max-phone:w-60 px-2 py-1 border border-[#958d9e] rounded' type="text" name="" value="Doe" id="lastName" />
              </div>

              <div className="df-fldc gap-1">
                <label className='font-poppins text-[#958d9e] text-base' htmlFor="occupation">Occupation</label>
                <input className='w-96 max-tab:w-84 max-mdPhone:w-72 max-phone:w-60 px-2 py-1 border border-[#958d9e] rounded' type="text" name="" value="Worker" id="occupation" />
              </div>

              <div className="df-fldc gap-1">
                <label className='font-poppins text-[#958d9e] text-base' htmlFor="phoneNumber">Phone</label>
                <input className='w-96 max-tab:w-84 max-mdPhone:w-72 max-phone:w-60 px-2 py-1 border border-[#958d9e] rounded' type="text" name="" value="+2348123456789" id="phoneNumber" />
              </div>

              <div className="df-fldc gap-1">
                <label className='font-poppins text-[#958d9e] text-base' htmlFor="emailAddress">Email Address</label>
                <input className='w-96 max-tab:w-84 max-mdPhone:w-72 max-phone:w-60 px-2 py-1 border border-[#958d9e] rounded' type="text" name="" value="johndoe@gmail.com" id="emailAddress" />
              </div>

              <div className="">
                <label htmlFor="country" className="font-poppins text-[#958d9e] text-base">Select Country</label>
                <Select
                  options={options}
                  value={selectedCountry}
                  onChange={(value) => countryChangeHandler(value)} menuPlacement='top'
                  styles={customSelectStyles}
                  placeholder="Select a country"
                />
              </div>
              <div className='border-b border-[#958d9e] pb-2 '>

                <button type="submit" className="btn w-40 text-base h-12 max-tab:w-32 max-tab:text-sm max-tab:h-10">Update Account</button>
              </div>
            </div>
            <div className="flex justify-end pb-2 px-2">
              <button className='btn w-20 text-sm h-8' onClick={() => setShowModal(false)}>Close</button>

            </div>
          </div>
        </div>}
    </>)
}

export default UserProfile