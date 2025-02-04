import { useRef } from "react"
import { Link, useLocation } from "react-router-dom"
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import how2 from "../../assets/elitesavings.jpg"
import how3 from "../../assets/investment.avif"
import how4 from "../../assets/crypto.jpg"
import how5 from "../../assets/businessCREL.jpg"
import how6 from "../../assets/maryJ.jpg"
import how7 from "../../assets/retirement.jpg"
import how8 from "../../assets/loan.jpg"
import how9 from "../../assets/pam&mamm.jpg"
const Help = (props: { show: boolean }) => {
    const location = useLocation();
    const isHome = location.pathname == "/";
    // needed this so the particle wont show 

    // gsap.registerPlugin(useGSAP);
    const boxRef = useRef(null);

    gsap.registerPlugin(ScrollTrigger);
    useGSAP(
        () => {
            gsap.fromTo([boxRef.current],
                {
                    opacity: 0,
                    y: 100
                },
                {
                    opacity: 1,
                    y: 0,
                    duration: 1,
                    scrollTrigger: {
                        trigger: boxRef.current,
                        start: 'top 80%',
                        end: 'bottom 20%',
                        toggleActions: 'play none none none', // Run animation once (on enter, no reverse)
                    }
                }
            );


        })
    const data: {
        top: string;
        detail: string;
        to: string;
        img: string;
    }[] = [
            {
                top: "Cryptocurrency", detail: "Digital assets like Bitcoin are an emerging investment class. Our fund provides exposure to Bitcoin and other key assets.", to: "/resources/digital-assets", img: how4
            },
            {
                top: "Real Estate Investment",
                detail: "In real estate, we handle the hard work so our clients can rest easy.", img: how5
                , to: "/business/commercial-real-estate-lending"
            },
            {
                top: "Cannabis Investments",
                detail: "Institutional investors are increasingly optimistic about the growth potential of cannabis-derived products.", img: how6, to: "/resources/cannabis-investments"
            },
            {
                top: "Retirement Planning",
                detail: "Significant advancements in healthcare have extended life expectancy in developed countries. Without sufficient savings or pensions, many risk outliving their retirement funds.", img: how7
                , to: "/resources/retirement-&-spouse-program"
            },
            {
                top: "Loans",
                detail: "Our Business and Personal Loans offer flexible financing with repayment terms from one to five years in monthly installments. Whether fixed or revolving, our business loans are designed to help you achieve your goals.", img: how8
                , to: "/personal/loans"
            },
            {
                top: "PAMM and MAM",
                detail: "In PAMM and MAM accounts, profits and losses from the manager's trades are distributed proportionally across managed accounts, with each client’s account mirroring the manager’s trades.",
                img: how9
                , to: "/resources/pamm-and-mam"
            }

        ]
    const topData: {
        heading: string, img: string, body: string, link: string, to: string

    }[] = [
            {
                heading: "EliteOceanic Savings", img: how2,
                body: "EliteOceanic Savings is dedicated to meeting the financial needs of individuals, farmers, businesses, and industries with a range of traditional banking products and online solutions.",
                link: "Learn More About Us", to: "/about-us"
            }, {
                heading: "Investors Relation",
                img: how3,
                body: "Loyalty is our priority, and we’re committed to building long-term relationships. Most of our clients join us through recommendations and referrals, a testament to our clients' trust.",
                link: "Learn More",
                to: "/investors"
            }
        ]
    return (
        <>
            <div className={`bg-slate-100 ${props.show && "pt-20"}   box    px-[12%] pb-10 max-tab:px-[6%] ${isHome && "relative"}`} ref={boxRef}>
                {props.show &&
                    <>
                        <h1 className="text-center pb-10 text-4xl font-sans text-[#oocc]">How can we help you today?</h1>
                        <div className="top dfAc gap-12 max-tab:flex-wrap">

                            {topData.map((value, key) => (
                                <div className="items max-tab:w-full bg-white shadow-md pb-8 rounded-lg" key={key}>
                                    <div className="img">
                                        <picture>
                                            <img src={value.img} className="h-80 w-full ro rounded-t-lg object-center object-cover" alt={value.heading} />
                                        </picture>
                                    </div>
                                    <div className="detail df-fldc-jc gap-5 pt-4 px-6">
                                        <h3 className="">{value.heading}</h3>
                                        <p className="text-[#777777] text-[.8rem] font-sans font-medium">{value.body}</p>
                                        <Link to={value.to} className="text-sky-500 font-semibold hover:text-black">{value.link}
                                        </Link>
                                    </div>
                                </div>
                            ))}




                        </div>
                    </>
                }

                <div className="howWeCan dfAc  pt-10 gap-8  max-mdLap:flex-wrap" >
                    {data.slice(0, 3).map((value, index) => (
                        <div className="items bg-white   max-mdLap:w-full w-[19.8rem]  shadow-md   rounded-lg" key={index}>
                            <div className="img ">
                                <picture>
                                    <img src={value.img} className="h-48 max-mdLap:h-60 w-full object-center object-cover rounded-t-lg" alt={value.top} />
                                </picture>
                            </div>
                            <div className="detail df-fldc gap-5 pt-4 h-60 max-phone:h-[16rem]  max-nav:h-72 max-mdLap:h-52 px-6">
                                <h5>{value.top}</h5>
                                <p className="text-[#777777] text-[.8rem] font-sans font-medium">{value.detail}</p>
                                <Link to={value.to} className="text-sky-500 font-semibold hover:text-black">Learn more</Link>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="howWeCan dfAc  mt-10 gap-8  max-mdLap:flex-wrap">
                    {data.slice(3, 6).map((value, index) => (
                        <div className="items bg-white   max-mdLap:w-full w-[19.8rem]  shadow-md  rounded-lg " key={index}>
                            <div className="img ">
                                <picture>
                                    <img src={value.img} className="h-48 max-mdLap:h-80 w-full object-center object-cover rounded-t-lg" alt={value.top} />
                                </picture>
                            </div>
                            <div className="detail df-fldc gap-5 pt-4 max-nav:h-[22rem] max-phone:h-[20rem] h-80 max-mdLap:h-52 px-6">
                                <h5>{value.top}</h5>
                                <p className="text-[#777777] text-[.8rem] font-sans font-medium">{value.detail}</p>
                                <Link to={value.to} className="text-sky-500 font-semibold hover:text-black">Learn more</Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default Help