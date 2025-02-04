import ReUsableHeroTH from "../../reusables/ReUsableHeroTH"
import img from "../../assets/investment.avif"
import LearnMore from "../../reusables/LearnMore"
import ReUsableMiddleSections from "../../reusables/ReUsableMiddleSections"
import {investmentSolutionsData} from "../../reusables/siteData/personal/PersonalPageData"
const InvestmentSolutions = () => {

  return (
    <>
      <ReUsableHeroTH img={img} heading={"Investment Solutions"} height={null} details={"We’ve merged, which means you can expect the same exceptional customer service and investment management you’ve always received."} />
      <ReUsableMiddleSections data={investmentSolutionsData.data} />
      <LearnMore text="Investment Solutions" />
    </>
  )
}

export default InvestmentSolutions