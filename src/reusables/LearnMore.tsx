import { Link } from "react-router-dom"

const LearnMore = (props:{text:string}) => {
  return (
<>
<div className="df-fldc-ac py-20 bg-blue-200 px-[4%] text-center">
    <p className="font-semibold text-xl">Want to Learn More About our {props.text}?
    </p>
    <p className="font-bold text-4xl pt-10 pb-8">Contact Us now</p>
    <div className="flex gap-10 max-mdPhone:flex-col max-mdPhone:gap-8">
       <Link to={"mailto:eo@gmail.com"} className="btn py-2 w-60 text-xl font-[500] rounded-3xl ">CONTACT US</Link>
    <Link to={""} className="btn py-2 w-60 text-xl font-[500] rounded-3xl ">INTERNET BANKING</Link>
 
    </div>
    </div>
</>  )
}

export default LearnMore