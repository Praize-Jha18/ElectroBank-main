import { Link } from "react-router-dom"
import Help from "../../components/home/Help"
import LearnMore from "../../reusables/LearnMore"
import ReUsableHero from "../../reusables/ReUsableHero"
import img from "../../assets/resource.jpg"

const ResourceIndex = () => {
  return (
    <>
<ReUsableHero img={img} heading={"Services"} height={"50vh"}/>
<div className="bg-purple-50 df-flDc gap-10 py-10">
  <p className="numans-paragraph">Here is a list of our services </p>
  <Link to={"/authlogin"}
   className="bg-sky-500 transition-all w-60 duration-500 ease-in-out text-center border-transparent border text-white hover:text-sky-500 hover:bg-white hover:border hover:border-sky-500 py-2  text-xl font-[500] rounded-3xl">INTERNET BANKING</Link>
</div>
<Help show={false}/>
<LearnMore text={"Our Services"}/>
</>
  )
}

export default ResourceIndex