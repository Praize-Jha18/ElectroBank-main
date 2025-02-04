
import ReUsableHero from '../../reusables/ReUsableHero'
import ReUsableDatails from '../../reusables/ReUsableDatails'
import LearnMore from '../../reusables/LearnMore'
import { resourceRASProgramData } from '../../reusables/siteData/resources/resourcesData'
import img from "../../assets/retirement.jpg"

const ResourceRASProgram = () => {
  return (
    <>
      <ReUsableHero img={img} heading={'Retirement and Spouse Program'} height={"60vh"} />
      <ReUsableDatails detailsData={resourceRASProgramData.detailsData} />
      <LearnMore text={'Retirement and Spouse Program'} />
    </>)
}

export default ResourceRASProgram