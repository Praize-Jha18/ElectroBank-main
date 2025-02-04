import LearnMore from "../../reusables/LearnMore"
import ReUsableHero from "../../reusables/ReUsableHero"
import businessBankingSolutionsData from "../../reusables/siteData/business/bankingSolutionsData"
import img from "../../assets/businessb.jpg"

const BusinessBankingSolutions = () => {

  return (
    <>
      <ReUsableHero img={img} heading={"Business Banking Solutions"} height={"50vh"} />

      <div className="bg-purple-50   px-[15%] max-mdLap:px-[6%] py-14 w-screen text-center">
        <p className="text-lg font-medium text-center pb-8  font-numans  leading-relaxed   text-stone-500 max-mdLap:text-lg max-mdLap:leading-[1.6] max-tab:text-base max-mdPhone:text-sm">{businessBankingSolutionsData.detailsData.top}</p>
        <div className=" df-fldc-ac gap-4 mb-6">
          {businessBankingSolutionsData.detailsData.mid.map((value, key) => (
            <div key={key}>
              <h6 className="text-2xl pb-6 text-[#3a3a3a]  font-numans">{value.heading}</h6>
              <p className="text-lg font-medium text-center pb-8  font-numans  leading-relaxed   text-stone-500 max-mdLap:text-lg max-mdLap:leading-[1.6] max-tab:text-base max-mdPhone:text-sm" style={{ whiteSpace: 'pre-line' }}>{value.body}</p>
            </div>
          ))}
        </div>
        {businessBankingSolutionsData.detailsData.bottom && <p
          className="text-lg font-medium text-center pb-8  font-numans  leading-relaxed   text-stone-500 max-mdLap:text-lg max-mdLap:leading-[1.6] max-tab:text-base max-mdPhone:text-sm">{businessBankingSolutionsData.detailsData.bottom}</p>}
        <div className="">

          <h6 className="text-2xl pb-6 text-[#3a3a3a]  font-numans">{businessBankingSolutionsData.listedItems.heading}</h6>
          <div className="">
            {
              businessBankingSolutionsData.listedItems.list.map((value, key) => (
                <p className="numans-paragraph" key={key}>{value}</p>
              ))
            }    </div>
        </div>

        <div className="py-10">

          <h6 className="text-2xl pb-6 text-[#3a3a3a]  font-numans">{businessBankingSolutionsData.bottomListedItems.heading}</h6>
          <div className="">
            {
              businessBankingSolutionsData.bottomListedItems.list.map((value, key) => (
                <p className="numans-paragraph" key={key}>{value}</p>
              ))
            }    </div>
        </div>


      </div>
      <LearnMore text={"Business Banking Solutions"} />

    </>)
}

export default BusinessBankingSolutions