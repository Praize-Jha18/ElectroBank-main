import ReUsableHero from "../../reusables/ReUsableHero"
import img from "../../assets/personalboy.jpg"
import ReUsableDatails from "../../reusables/ReUsableDatails"
import LearnMore from "../../reusables/LearnMore"
import { personalSavingData } from "../../reusables/siteData/personal/PersonalPageData"
const PersonalSaving = () => {

  return (
    <>
      <ReUsableHero img={img} heading={"Savings"} height={null} />
      <ReUsableDatails detailsData={personalSavingData.detailsData} />
      <LearnMore text={"Savings Accounts"} />
    </>)
}

export default PersonalSaving