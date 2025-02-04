import { Link } from 'react-router-dom'

const ShortNote = (props:{to:string,link:string,body:string}) => {
  return (
    <div className="bg-purple-50 df-fldc-ac px-[12%] max-mdLap:px-[6%] py-14 w-screen ">
    <p className='text-[1.4rem] text-center pb-8  leading-relaxed   text-stone-500 max-mdLap:text-lg max-mdLap:leading-[1.6] max-tab:text-base max-mdPhone:text-sm'>
        {props.body} </p>
    <Link
      to={props.to}
      className="btn py-2 w-64 text-xl font-[500] rounded-3xl"
    >
     {props.link}
    </Link>  </div>
  )
}

export default ShortNote