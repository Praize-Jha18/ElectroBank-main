import ReUsableHero from '../../reusables/ReUsableHero'
import ReUsableDatails from '../../reusables/ReUsableDatails'
import LearnMore from '../../reusables/LearnMore'
import businessCRELData from '../../reusables/siteData/business/businessCRELData'
import img from "../../assets/businessCREL.jpg"

const BusinessCREL = () => {

  return (
<>
<ReUsableHero img={img} heading={'Commercial Real Estate Lending'} height={"50vh"}/>
<ReUsableDatails detailsData={businessCRELData.detailsData}/>
          <LearnMore text={'Commercial Real-estate loans'}/>
</>  )
}

export default BusinessCREL