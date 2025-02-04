// import { useEffect } from 'react';
// import { useLocation } from 'react-router-dom';
import Chatra from '@chatra/chatra';
const useChatra = () => {

// const useChatra = (pathsToShowChatra: string[]) => {
  // const location = useLocation();
//   Chatra('init', {
//     ID: 'YOUR_CHATR_PUBLIC_KEY',
//     setup: {
//       buttonSize: 75,
//       colors: {
//         buttonText: '#ffffff',
//         buttonBg: '#000000',
//       },
//     },
//   });
  // useEffect(() => {
    // if (pathsToShowChatra.includes(location.pathname)) {
        Chatra('init', {
            ID: import.meta.env.VITE_CHATRA_ID,
          });
    // } else {
    //   Chatra('destroy'); 
    // }
  // }, [location, pathsToShowChatra]);
};


const ChatraComponent = () => {
  // const pathsToShowChatra = ['/home', '/contact-us', '/personal/investment-solutions', '/business']; 

  // useChatra(pathsToShowChatra);
  useChatra();

  return (
    <div></div>
  )
}

export default ChatraComponent
