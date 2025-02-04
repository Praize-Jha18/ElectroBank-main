import LearnMore from "../../reusables/LearnMore"
import ReUsableDatails from "../../reusables/ReUsableDatails"
import ReUsableHero from "../../reusables/ReUsableHero"
import businessSavingAccountData from "../../reusables/siteData/business/businessSavingAccountData"
import img from "../../assets/businessS.jpg"

const BusinessSavingAccount = () => {

  return (
    <>
      <ReUsableHero img={img} heading={"Business Savings"} height={"50vh"} />
      <ReUsableDatails detailsData={businessSavingAccountData.detailsData} />
      <LearnMore text={"Business Saving"} />
    </>)
}

export default BusinessSavingAccount