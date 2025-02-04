import Particles, { initParticlesEngine } from "@tsparticles/react";
import { useEffect, useMemo, useState } from "react";
import { loadSlim } from "@tsparticles/slim";
import { ISourceOptions } from "@tsparticles/engine";

// interface ParticlesComponentProps {
//   id: string; // Assuming 'id' is a required prop of type string
// }: React.FC<ParticlesComponentProps>

const ParticlesComponent = () => {
  const [init, setInit] = useState(false);

  // this should be run only once per application lifetime
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine); // Slim version for smaller bundle size
    }).then(() => {
      setInit(true);
    });
    console.log(init);
  }, []);

  // const particlesLoaded = (container: any) => {
  //   console.log(container);
  // };

  // Specify options using the ISourceOptions type
  const options: ISourceOptions = useMemo(
    () => ({
          // background: {
      //   color: {
      //     value: "rgba(7,29,65,0.74)", // No background color here, only particles visible on a dark background
      //   },
      // },
      fpsLimit: 120,
      interactivity: {
        events: {
          onClick: {
            enable: true,
            mode: "repulse",
          },
          onHover: {
            enable: true,
            mode: "grab",
          },
        },
        modes: {
          push: {
            distance: 200,
            duration: 15,
          },
          grab: {
            distance: 150,
          },
        },
      },
      particles: {
        color: {
          value: "#FFFFFF", // Particles set to pure white
        },
        links: {
          color: "#FFFFFF", // Links between particles are also pure white
          distance: 150,
          enable: true,
          opacity: 0.9, // Increase opacity of the particle links to make them more visible
          width: 1,
        },
        move: {
          direction: "none", // Valid string literal value for direction
          enable: true,
          outModes: {
            default: "bounce",
          },
          random: false,
          speed: 4,
          straight: false,
        },
        number: {
          density: {
            enable: true,
          },
          value: 150,
        },
        opacity: {
          value: 1.0, // Set particle opacity to 100% to ensure they are bright
        },
        shape: {
          type: "circle",
        },
        size: {
          value: { min: 1, max: 3 },
        },
      },
      detectRetina: true,
    }),
    []
  );

  return (
    <div className="absolute h-[40vh] w-full overflow-hidden" style={{overflow:"hidden"}}>
      <Particles
      id={"particlesId"} 
      // init={particlesLoaded}
      options={options}  className="absolute inset-0 h-[40vh]" 
    /> 
   </div>
  );
};

export default ParticlesComponent;
