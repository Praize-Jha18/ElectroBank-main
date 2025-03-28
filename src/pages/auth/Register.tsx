import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState, useMemo } from "react";
import { Link, useNavigate } from "react-router-dom";
import Select from "react-select";
import countryList from "react-select-country-list";
import customSelectStyles from "../useronly/customStyle";
import axios from 'axios'
import { toast, ToastContainer, Id } from "react-toastify";

const Register = () => {
  const [message, setMessage] = useState("")
  type optionType = { value: string, label: string }[];

  const options = useMemo(() => countryList().getData(), []);

  const [formState, setFormState] = useState({
    firstName : "",
    lastName : "",
    username : "",
    password : "",
    occupation : "",
    email : "",
    address : "",
    phoneNumber : "",
    dob : "",
    transaction_pin : "",
    selectedCountry: null,
    selectedCurrency: { value: 'naira', label: 'Naira' },
    selectedMaritalStatus: { value: 'single', label: 'Single' },
    selectedGender: { value: 'male', label: 'Male' },
    selectedAccountType: null,
  });

  const handleSelectChange = (field: string, selectedOption: any) => {
    setFormState((prevState) => ({
      ...prevState,
      [field]: selectedOption,
    }));
  };



  const currencyOptions: optionType = [
    { value: 'naira', label: 'Naira' },
    { value: 'dollars', label: 'Dollars' },
    { value: 'pounds', label: 'Pounds' },
  ];

  const maritalStatusOptions: optionType = [
    { value: 'single', label: 'Single' },
    { value: 'married', label: 'Married' },
    { value: 'divorced', label: 'Divorced' },
  ];

  const accountTypeOption: optionType = [
    { value: 'savings', label: 'Savings' },
    { value: 'current', label: 'Current' },
    { value: 'checking', label: 'Checking' },
    { value: 'fixed-deposit', label: 'Fixed Deposit' },
    { value: 'non-resident', label: 'Non-Resident' },
    { value: 'online-banking', label: 'Online Banking' },
    { value: 'joint-account', label: 'Joint Account' },
    { value: 'domiciliary-account', label: 'Domiciliary Account' },
  ];

  const genderOptions: optionType = [
    { value: 'male', label: 'Male' },
    { value: 'female', label: 'Female' },
    { value: 'other', label: 'Other' },
  ];

  const navigate = useNavigate();
  // =============================== HANDLING THE SUBMIT AND SENDING FORM DETAILS TO THE SIGNUP POST URL
  const handleSubmit = async (e : React.FormEvent)=>{
    console.log("Form data:", formState);
    e.preventDefault();
    try {
      const toastId: Id = toast.info("Creating user...", {
        autoClose: false,
        closeOnClick: false,
      });
      const response = await axios.post("https://electrobank-main.onrender.com/signup", formState, {
          headers: { "Content-Type": "application/json" },
          withCredentials : true
      });

      if (response.status === 201) {
        toast.dismiss(toastId)
          navigate("/account");

      } else {
          console.error(response.data.error);
          // setMessage(response.data.error);
      }
  } catch (error: any) {
      console.error(error);
      toast.error(error.response.data.error,{autoClose :false})
      setMessage(error.response?.data?.error || "Something went wrong");
  }
  }


 

  return (
    <>
    <ToastContainer />
      <div className="bg-sky-500 flex items-center h-16 px-8 fixed w-full font-poppins justify-between z-50">
        <div className="flex justify-center flex-grow">
          <p className="text-white text-xl">EliteOceanic Savings</p>
        </div>
        <Link to={"/auth/login"}>
          <FontAwesomeIcon icon={faUser} className="text-[#27173E] h-8" />
        </Link>
      </div>
     
      <div className="body bg-slate-100 font-poppins pt-24 pb-10">
      <h1>{message}</h1>
        <h1 className="text-[#27173E] text-3xl text-center font-semibold">Register Now</h1>
        <form className="px-4" method="post" onSubmit={handleSubmit}>
          {/* First Name */}
          <div className="mt-4">
            <label htmlFor="firstName" className="text-[#27173E] text-xs">First Name</label>
            <input type="text" className="registerInputStyle" id="firstName" name="firstName" onChange={(e)=>setFormState((prevState) => ({...prevState,firstName: e.target.value}))} value={formState.firstName} required placeholder="First Name" />
          </div>

          {/* Last Name */}
          <div className="mt-4">
            <label htmlFor="lastName" className="text-[#27173E] text-xs">Last Name</label>
            <input type="text" className="registerInputStyle" id="lastName" name="lastName" required onChange={(e)=>setFormState((prevState)=>({...prevState, lastName : e.target.value}))} value={formState.lastName} placeholder="Last Name" />
          </div>

          {/* Username */}
          <div className="mt-4">
            <label htmlFor="username" className="text-[#27173E] text-xs">Username</label>
            <input type="text" className="registerInputStyle" id="username" name="username" required onChange={(e)=>setFormState((prevState)=>({...prevState, username : e.target.value}))} value={formState.username} placeholder="User Name" />
          </div>

          {/* Password */}
          <div className="mt-4">
            <label htmlFor="password" className="text-[#27173E] text-xs">Password</label>
            <input type="password" className="registerInputStyle" id="password" name="password" required onChange={(e)=>setFormState((prevState)=>({...prevState, password : e.target.value}))} value={formState.password} placeholder="Password" />
          </div>

          <div className='mt-4'>
            <label htmlFor="Occupation" className='text-[#27173E] text-xs'>Occupation</label>
            <input type="text" className='registerInputStyle' id="Occupation" onChange={(e)=>setFormState((prevState)=>({...prevState, occupation : e.target.value}))} value={formState.occupation} placeholder='Occupation' />
          </div>
          <div className='mt-4'>
            <label htmlFor="phoneNumber" className='text-[#27173E] text-xs'>Phone Number</label>
            <input type="tel" className='registerInputStyle' id="phoneNumber"  onChange={(e)=>setFormState((prevState)=>({...prevState, phoneNumber : e.target.value}))} value={formState.phoneNumber} placeholder='080 123 456 789' />
          </div>
          <div className='mt-4'>
            <label htmlFor="pin" className='text-[#27173E] text-xs'>Transaction pin</label>
            <input type="password" className='registerInputStyle' maxLength={4} id="pin"  onChange={(e)=>setFormState((prevState)=>({...prevState, transaction_pin : e.target.value}))} value={formState.transaction_pin} placeholder='****' />
          </div>
          <div className='mt-4'>
            <label htmlFor="email" className='text-[#27173E] text-xs'>Email</label>
            <input type="email" className='registerInputStyle' required onChange={(e)=>setFormState((prevState)=>({...prevState, email : e.target.value}))} value={formState.email}  id="email" placeholder='xyz@gmail.com' />
          </div>
          <div className='mt-4'>
            <label htmlFor="DOB" className='text-[#27173E] text-xs'>Date Of Birth</label>
            <input type="date" className='registerInputStyle ' required onChange={(e)=>setFormState((prevState)=>({...prevState, dob : e.target.value}))} value={formState.dob} id="DOB" /></div>

          {/* Marital Status */}
          <div className="mt-4">
            <label htmlFor="maritalStatus" className="text-[#27173E] text-xs">Marital Status</label>
            <Select
              value={formState.selectedMaritalStatus}
              options={maritalStatusOptions}
              onChange={(option) => handleSelectChange('selectedMaritalStatus', option)}
              styles={customSelectStyles}
            />
          </div>

          {/* Gender */}
          <div className="mt-4">
            <label htmlFor="gender" className="text-[#27173E] text-xs">Gender</label>
            <Select
              value={formState.selectedGender}
              options={genderOptions}
              onChange={(option) => handleSelectChange('selectedGender', option)}
              styles={customSelectStyles}
            />
          </div>      <div className='mt-4'>
            <label htmlFor="address" className='text-[#27173E] text-xs'>Address</label>
            <input type="text" name="address" required className='w-full block text-black mt-1 placeholder:text-stone-500 bg-slate-100 border-b-stone-500 border-b-[1px] pb-6 text-base outline-none' id="address" onChange={(e)=>setFormState((prevState) => ({...prevState, address: e.target.value}))} value={formState.address} placeholder='House or Office Address' />
          </div>
          <div className='mt-4'>
            <label htmlFor="Select Country" className='text-[#27173E] text-xs'>Account Type</label>
            <div className="w-full">
              <Select
                options={accountTypeOption}
                value={formState.selectedAccountType}
                onChange={(option)=> handleSelectChange('selectedAccountType',option)}
                styles={customSelectStyles}
                placeholder="Account Type"
              />
            </div>

          </div>

          {/* Country */}
          <div className="mt-4">
            <label htmlFor="country" className="text-[#27173E] text-xs">Select Country</label>
            <Select
              options={options}
              value={formState.selectedCountry}
              onChange={(option) => handleSelectChange('selectedCountry', option)}
              styles={customSelectStyles}
              placeholder="Select a country"
            />
          </div>

          {/* Currency */}
          <div className="mt-4">
            <label htmlFor="currency" className="text-[#27173E] text-xs">Account Currency</label>
            <Select
              options={currencyOptions}
              value={formState.selectedCurrency}
              onChange={(option) => handleSelectChange('selectedCurrency', option)}
              styles={customSelectStyles}
            />
          </div>

          <div className="flex py-4">
            <input type="checkbox" className="text-[#958d9e]" disabled checked />
            <p className="text-[#958d9e] text-base pl-2">I agree to the terms and conditions</p>
          </div>

          {/* Submit Button */}
          <button type="submit" className="btn w-full text-lg h-14">Register</button>
          <Link to={"/auth/login"} className="text-center block text-purple-500 text-base mt-4">Already Have an Account? Login</Link>
        </form>
      </div>
    </>
  );
};

export default Register;
