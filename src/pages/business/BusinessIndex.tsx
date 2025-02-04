import ReUsableHero from "../../reusables/ReUsableHero"
import img from "../../assets/business.jpg"
import ShortNote from "../../reusables/ShortNote"
import FlexAndEnlarge from "../../reusables/FlexAndEnlarge"
import LearnMore from "../../reusables/LearnMore"
import businessIndexData from "../../reusables/siteData/business/businessIndexData"

const BusinessIndex = () => {

  return (
    <>
      <ReUsableHero heading="Business Banking" img={img} height="50vh" />
      <ShortNote to="/auth/login" link="INTERNET BANKING" body="You have big goals for your business. Pair your efforts with effective financial solutions and watch ideas take shape." />
      <FlexAndEnlarge items={businessIndexData.items} headingFont={"font-numans"} pFont={"font-numans"} lFont={"font-numans"} />
      <LearnMore text="Business Banking" />
    </>
  )
}

export default BusinessIndex