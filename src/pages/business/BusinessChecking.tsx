import LearnMore from "../../reusables/LearnMore"
import ReUsableDatails from "../../reusables/ReUsableDatails"
import ReUsableHero from "../../reusables/ReUsableHero"
import businessCheckingData from "../../reusables/siteData/business/businessCheckingDate"
import img from "../../assets/businessC.jpg"

const BusinessChecking = () => {
   
    return (
        <>
            <ReUsableHero img={img} heading={"Business Checking"} height={'50vh'} />
            <ReUsableDatails detailsData={businessCheckingData.detailsData} />
            <LearnMore text={"Personal Checking"} />
        </>)
}

export default BusinessChecking