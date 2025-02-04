import ReUsableHero from "../../reusables/ReUsableHero"
import img from "../../assets/personalchecking.avif"
import LearnMore from "../../reusables/LearnMore"
import ReUsableDatails from "../../reusables/ReUsableDatails"
import { personalCheckingData } from "../../reusables/siteData/personal/PersonalPageData"
const PersonalChecking = () => {

  return (
    <>
      <ReUsableHero heading="Personal Checking" img={img} height={null} />
      <ReUsableDatails detailsData={personalCheckingData.detailsData} />
      <LearnMore text={"Personal Checking"} />
    </>
  )
}

export default PersonalChecking