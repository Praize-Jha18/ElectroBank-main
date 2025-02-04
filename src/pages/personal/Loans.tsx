import ReUsableHeroTH from "../../reusables/ReUsableHeroTH"
import img from "../../assets/loan.jpg"
import LearnMore from "../../reusables/LearnMore"
import ReUsableMiddleSections from "../../reusables/ReUsableMiddleSections"
import { loansData } from "../../reusables/siteData/personal/PersonalPageData"
const Loans = () => {

  return (
<>
<ReUsableHeroTH details="Use your existing deposits or investments as collateral to secure your international loans." heading="Personal Loans" height={null} img={img}/>
<ReUsableMiddleSections data={loansData.data}/>
<LearnMore  text={"Personal loans"}/>
</>
  )
}

export default Loans