import LearnMore from "../../reusables/LearnMore"
import ReUsableDatails from "../../reusables/ReUsableDatails"
import ReUsableHero from "../../reusables/ReUsableHero"
import { resourcePAMData } from "../../reusables/siteData/resources/resourcesData"
import img from "../../assets/pam&mamm.jpg"

const ResourcePAM = () => {
  return (
    <>
      <ReUsableHero img={img} heading={"Pamm And Mam"} height={"60vh"} />
      <ReUsableDatails detailsData={resourcePAMData.detailsData} />

      <LearnMore text={"Pamm and Mam"} />
    </>)
}

export default ResourcePAM