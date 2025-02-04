import { TypeAnimation } from 'react-type-animation';
const ReUsableHero = (props: { img: string | null; heading: string; height: string | null }) => {
  const height = props.height ? props.height : '70vh';
  return (
    <div className="relative df-ac">
      <div className="img" style={{ height }}>

        {props.img && <picture><img
          src={props.img}
          alt="hero-bg"
          className="w-screen object-center object-cover"
          style={{ height }}
        /> </picture>}


      </div>
      <div className={`absolute pl-24 pr-6 max-tab:pl-20 max-mdPhone:pl-12 df-ac ${props.img == null ? " bg-teal-800 " : "bg-neutral-800"}  bg-opacity-70 h-full w-full`}>
        <h1 className="text-[3.125rem] leading-snug font-bold text-white font-numans w-[50%] max-mdLap:w-[70%] max-tab:w-[100%] max-tab:text-[2.5rem] max-mdPhone:text-[2rem] max-phone:text-[1.8rem]">

          <TypeAnimation
            sequence={[
              // Same substring at the start will only be typed once, initially
              props.heading,
              5000,
              '', 2000,
              props.heading


            ]}
            speed={25}

            repeat={Infinity}
          />
          {/* 
          <TypeAnimation sequence={[   props.heading, 
    5000,
    '', 
    2000, 
    props.heading ]}
            speed={75} repeat={Infinity}
          /> */}
          {/* {props.heading} */}
        </h1>
      </div>
    </div>
  );
};

export default ReUsableHero;
