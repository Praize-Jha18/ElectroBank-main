import { Link } from "react-router-dom"

const ContactUs = () => {
    const items:{heading:string,details:string | null}[] = [{
        heading: "Personal Enquires", details:`Our operating hours are:
Monday to Friday: 09:00 – 17:00 UK time
excluding  bank holidays`,
    },
    {
        heading: "Personal Banking New Business", details:`Our operating hours are:
        Monday to Friday: 09:00 – 17:00 UK time
        excluding  bank holidays`,
      },
      {heading:"Corporate & Business Banking",details:null},
      {heading:"Internet Banking",details:`Our operating hours are:
24 Hours`}

    ]
    return (
        <>
            <div className="text-center mt-14">
                <h1 className="font-helvetica text-5xl text-[#54595f] font-semibold pb-6">Contact Us Anytime</h1>
                <p className="font-helvetica text-base text-[#7a7a7a] pb-8">Please note that all communications may be recorded for training and quality purposes.</p>
                <div className="flex justify-center flex-wrap gap-8 px-20 max-nav:px-10 pb-10">
                    {items.map((value, key) => (
                   <div className="text-left shadow-[0_0_2px_rgba(0,0,0,0.4)]
                   hover:shadow-[0_0_5px_rgba(0,0,0,0.4)] transition-shadow
                   duration-100 ease-linear 
                   w-[45%]  rounded-sm py-8 px-4" key={key}>
                           <h1 className='font-sans text-black text-xl'>{value.heading}</h1>
                           <p   style={{ whiteSpace: 'pre-line' }} className="text-[#777] font-sans text-sm py-4 leading-relaxed">{value.details}</p>
                           <Link to={""}  className="text-sky-500 font-semibold hover:text-black">SEND US AN EMAIL</Link>
                       </div>
                    ))}
                </div>
            </div>

        </>)
}

export default ContactUs