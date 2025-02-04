import img from '../assets/business.jpg'
import { Link } from 'react-router-dom'
const About = () => {
    const items = [
        { heading: "Our business", details: "We help clients flex their international financial muscles, from banking and borrowing to saving and investing." },
        { heading: "Our pledge to society", details: "We’re more than just a bank. We look beyond the financial outcome to create more value socially, economically and environmentally." },
    ]
    return (
        <>
            <div className="relative df-ac">
                <div className="img">
                    <picture>
                        <img
                            src={img}
                            alt="hero-bg"
                            className="w-screen object-center object-cover"
                            style={{ height: "50vh" }}
                        />
                    </picture>
                </div>
                <div className="absolute pl-20 max-tab:pl-10 pr-4 df-fldc-jc max-mdPhone:pl-6 bg-neutral-800 bg-opacity-70 h-full w-full">
                    <h1 className="text-4xl font-helvetica   text-green-50 pb-6">About Us</h1>
                    <p className="text-green-50 text-base font-helveticae">EliteOceanic Savings International  has a legacy spanning more than 100 years</p>
                </div>
            </div>
            {/*about-us  */}
            <div className="details py-14 gap-8 df-fldc-ac px-[15%] max-mdLap:px-[6%] text-center">
                <h1 className="font-helvetica text-5xl text-[#54595f] font-semibold">Globally focused, locally relevant</h1>
                <p className="font-helvetica text-lg px-28 leading-loose text-[#7a7a7a]">We are proud to be part of the World’s largest banking group by assets, EliteOceanic Savings International.  Our operations in Jersey, London, the Isle of Man and Mauritius connect people and businesses to international markets.</p>

            </div>
            <div className="flex justify-center gap-8 px-20 max-nav:px-10 pb-10">
                {items.map((value, key) => (
                    <div className="text-left shadow-[0_0_5px_rgba(0,0,0,0.4)]
                    hover:shadow-[0_0_10px_rgba(0,0,0,0.4)] transition-shadow
                    duration-100 ease-linear
                    w-[45%]  rounded-md pt-4 pb-4 px-4" key={key}>
                        <h6 className='font-sans text-black text-xl'>{value.heading}</h6>
                        <p className='text-[#777] font-sans text-base py-4  '>{value.details}</p>
                        <a href="" className='text-[#54595f] uppercase'>Learn more</a>
                    </div>
                ))}
            </div>
            <div className="df-fldc-ac py-20 bg-blue-200 px-[4%] text-center">
                <p className="font-semibold text-xl">Want to Learn More About EliteOceanic Savings?
                </p>
                <p className="font-bold text-4xl pt-10 pb-8">Contact Us now</p>
                <div className="flex gap-10 max-mdPhone:flex-col max-mdPhone:gap-8">
                    <Link to={"mailto:eo@gmail.com"} className="btn py-2 w-60 text-xl font-[500] rounded-3xl ">CONTACT US</Link>
                    <Link to={""} className="btn py-2 w-60 text-xl font-[500] rounded-3xl ">INTERNET BANKING</Link>

                </div>
            </div>
        </>)
}

export default About