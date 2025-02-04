import LearnMore from "../../reusables/LearnMore"
import ReUsableDatails from "../../reusables/ReUsableDatails"
import ReUsableHero from "../../reusables/ReUsableHero"
import { resourceCAIData } from "../../reusables/siteData/resources/resourcesData"
import img from "../../assets/maryJ.jpg"

const ResourceCAI = () => {
  return (<>

    <ReUsableHero img={img} heading={'Cannabis Investments'} height={"50vh"} />
    <ReUsableDatails detailsData={resourceCAIData.detailsData} />
    <LearnMore text={"Cannabis Investment"} />
  </>)
}

export default ResourceCAI