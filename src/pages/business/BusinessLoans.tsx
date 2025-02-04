import LearnMore from "../../reusables/LearnMore";
import ReUsableHero from "../../reusables/ReUsableHero"
import businessLoansData from "../../reusables/siteData/business/businessLoansData";
import img from "../../assets/loan.jpg"

const BusinessLoans = () => {


    return (
        <>
            <ReUsableHero img={img} heading={"Business Loans"} height={"50vh"} />

            <div className="bg-purple-50 df-fldc-jc gap-4   px-[15%] max-mdLap:px-[6%] py-14 w-screen text-center">
                <p className="text-lg font-medium text-center pb-8  font-numans  leading-relaxed   text-stone-500 max-mdLap:text-lg max-mdLap:leading-[1.6] max-tab:text-base max-mdPhone:text-sm">{businessLoansData.detailsData.top}</p>
                <div className=" df-fldc-ac gap-4 ">
                    {businessLoansData.detailsData.mid.map((value, key) => (
                        <div key={key}>
                            <h6 className="text-2xl pb-6 text-[#3a3a3a]  font-numans">{value.heading}</h6>
                            <p className="text-lg font-medium text-center pb-8  font-numans  leading-relaxed   text-stone-500 max-mdLap:text-lg max-mdLap:leading-[1.6] max-tab:text-base max-mdPhone:text-sm" style={{ whiteSpace: 'pre-line' }}>{value.body}</p>
                        </div>
                    ))}
                </div>

                <div className="">

                    <h6 className="text-2xl pb-6 text-[#3a3a3a]  font-numans">{businessLoansData.listedItems.heading}</h6>
                    <div className=" df-fldc-ac gap-1">
                        {
                            businessLoansData.listedItems.list.map((value, key) => (
                                <p className="numans-paragraph" key={key}>{value}</p>
                            ))
                        }    </div>
                </div>


                <div className=" df-fldc-ac gap-6 ">
                    <h1 className="text-[#3a3a3a] text-5xl">Small Business Loans</h1>
                    <h5 className="text-lg font-semibold text-center pb-1  font-numans  leading-relaxed   text-stone-500 max-mdLap:text-lg max-mdLap:leading-[1.6] max-tab:text-base max-mdPhone:text-sm">Borrow at the speed of small business with our online application</h5>
                    <p className="numans-paragraph">Need working capital right now? Need to grow your business quickly?</p>
                    <p className="numans-paragraph">Through our partnership with Fundation®, we’ve streamlined our loan process and expanded the credit solutions with which we can provide you. We want to say ‘yes’ faster – and more often.</p>
                    <p className="numans-paragraph"> Click  <a href="mailto:" className="text-sky-500">Apply Now</a>  to get started.</p>
                </div>
                <div className="">
                    <h1 className="text-[#3a3a3a] font-numans text-2xl pb-4">Features</h1>
                    <div className="">
                        <div className=" df-fldc-ac gap-2 mb-4">
                            {businessLoansData.featuresTopData.map((value, key) => (
                                <p key={key} className="numans-paragraph">
                                    {value.heading}:<span className="font-semibold">{value.bold}</span>.
                                    {value.light}
                                </p>
                            ))}
                        </div>
                        <p className="numans-paragraph"> Credit Solutions <span className="font-semibold">Powered by Fundation®</span></p>
                        <div className=" df-fldc-ac gap-2 mb-6">                            {businessLoansData.featuresBottomData.map((value, key) => (
                            <p key={key} className="numans-paragraph"><span className="font-semibold">{value.bold}: </span>
                                {value.light}.
                            </p>
                        ))}
                        </div>
                        <p className="numans-paragraph">Sensible.  Offers are both term loans (up to $1,000,000) and lines of credit (up to $150,000) with no pre-payment penalties and terms up to 5 years.  We only offer fully-amortizing loans – meaning you only pay interest on the outstanding balance. </p>
                    </div>
                </div>

            </div>
            <LearnMore text={"Business Loans"} />
        </>)
}

export default BusinessLoans