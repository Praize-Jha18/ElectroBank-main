import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// Type for dropdown names
type DropdownKeys = 'personal' | 'business' | 'resources';

const RenderMultipleLinks = (props: { links: string[], parent: string }) => (
  <>
    {props.links.map((value, key) => (
      <Link
        to={`${props.parent}/${value.split(" ").join("-").toLowerCase()}`}
        key={key}
        className="block w-full max-nav:w-[inherit] px-4 text-[.8rem] font-semibold  max-nav:font-light py-2 text-gray-700 hover:bg-gray-200 "
      >
        {value}

      </Link>
    ))}
  </>
);

const Top = () => {
  const personalLinks = [
    "Personal Checking",
    "Savings",
    "Investment Solutions",
    "Loans"
  ];

  const businessLinks = [
    "Business Banking Solutions",
    "Business Savings Account",
    "Business Checking Account",
    "Business Loans",
    "Commercial Real Estate Lending"
  ];

  const resourcesLinks = [
    "Digital Assets",
    "Retirement & Spouse Program",
    "Pamm And Mam",
    "Cannabis Investments"
  ];

  // Define the type of isOpen state to have specific keys
  const [isOpen, setIsOpen] = useState<{ personal: boolean, business: boolean, resources: boolean }>({
    personal: false,
    business: false,
    resources: false
  });
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth >= 1200);

  useEffect(() => {
    const handleResize = () => {
      const currentIsLargeScreen = window.innerWidth >= 1200;
      setIsLargeScreen(currentIsLargeScreen);
  
      // Close all dropdowns on resize
      setIsOpen({
        personal: false,
        business: false,
        resources: false,
      });
      showNav(false)
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const toggleDropdown = (dropdown: DropdownKeys) => {
    setIsOpen((prev) => ({
      ...prev,
      [dropdown]: !prev[dropdown],
    }));
  };


  const handleMouseEnter = (dropdown: DropdownKeys) => {
    if (isLargeScreen) {
      setIsOpen((prev) => ({
        ...prev,
        [dropdown]: true,
      }));
    }
    else {

    }

  };

  const handleMouseLeave = (dropdown: DropdownKeys) => {
    if (isLargeScreen) {
      setIsOpen((prev) => ({
        ...prev,
        [dropdown]: false,
      }));
    }
  };
  const [nav, showNav] = useState<boolean>(false);
  const location = useLocation();

  useEffect(() => {
    // Reset nav state when the route changes
    setIsOpen({
      personal: false,
      business: false,
      resources: false,
    });
    showNav(false);
  }, [location])
  // pr
  return (
    <div className="navbar shadow-lg pl-4 pr-20 max-nav:px-10 max-nav:h-16 bg-slate-100 df-jsb items-center sticky top-0 z-50">
      <div className="h-8 w-8 max-nav:flex hidden rounded-full border-2 border-sky-500 p-1.5  justify-center  cursor-pointer items-center" onClick={() => showNav(true)}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          id="bold"
          viewBox="0 0 24 24"
          className="h-full w-full text-sky-500"
          fill="currentColor"
        >
          <g>
            <path d="m9.25 0h-7.5c-.965 0-1.75.785-1.75 1.75v4.5c0 .965.785 1.75 1.75 1.75h7.5c.965 0 1.75-.785 1.75-1.75v-4.5c0-.965-.785-1.75-1.75-1.75z"></path>
            <path d="m9.25 10h-7.5c-.965 0-1.75.785-1.75 1.75v10.5c0 .965.785 1.75 1.75 1.75h7.5c.965 0 1.75-.785 1.75-1.75v-10.5c0-.965-.785-1.75-1.75-1.75z"></path>
            <path d="m22.25 16h-7.5c-.965 0-1.75.785-1.75 1.75v4.5c0 .965.785 1.75 1.75 1.75h7.5c.965 0 1.75-.785 1.75-1.75v-4.5c0-.965-.785-1.75-1.75-1.75z"></path>
            <path d="m22.25 0h-7.5c-.965 0-1.75.785-1.75 1.75v10.5c0 .965.785 1.75 1.75 1.75h7.5c.965 0 1.75-.785 1.75-1.75v-10.5c0-.965-.785-1.75-1.75-1.75z"></path>
          </g>
        </svg>
      </div>




      <div className="logo  pl-3">
        <Link to="/" className='font-semibold text-stone-600 h-12 block content-center'>
          ELITEOCEANIC SAVINGS
        </Link>
      </div>
      <div className="max-nav:block hidden ">
        <Link to="/auth/login" className='font-helvetica text-base font-semibold text-sky-500'>Login</Link>
      </div>
      <div className={` max-nav:absolute max-nav:h-screen max-nav:w-screen max-nav:bg-black max-nav:bg-opacity-55 top-0 bottom-0 ${nav ? "left-0" : "left-[-200rem]"} transition-all ease-in-out duration-500 `} onClick={() => showNav(false)}>
        <div className="links  max-nav:flex-col  max-nav:absolute  max-nav:w-72 static max-nav:bg-white max-nav:h-full max-nav:inline-block
      transition-all ease-in-out duration-500 max-nav:overflow-y-auto
      dfAc"  onClick={(e: React.MouseEvent<HTMLDivElement>) => {
            e.stopPropagation()
          }}>
          <div className="text-right hidden max-nav:block">
            <FontAwesomeIcon icon={faTimes} className=' text-[#6263ff] h-10 w-5 text-lg pr-3 cursor-pointer' onClick={() => showNav(false)} />

          </div>
          {/* Personal Dropdown */}
          <div
            className="max-nav:static relative transition-all ease-in-out duration-1000 "
            onMouseEnter={() => handleMouseEnter('personal')}
            onMouseLeave={() => handleMouseLeave('personal')}
          >
            <div className="cursor-pointer text-sm max-nav:px-6 max-nav:text-[#494c4f] max-nav:font-helvetica max-nav:text-xl max-nav:font-semibold  px-2  py-[10px] max-nav:df-jsb-ac" onClick={() => toggleDropdown('personal')}>
              <Link to="/personal" className=''>Personal </Link><span >+</span>
            </div>

            {isOpen.personal && (
              <div className="dropdown w-44 df-fldc max-nav:static max-nav:w-full max-nav:rounded-none max-nav:border-none max-nav:shadow-none
               absolute bg-white border border-gray-200 rounded-lg shadow-lg">
                <RenderMultipleLinks links={personalLinks} parent="personal" />
              </div>
            )}
          </div>

          {/* Business Dropdown */}
          <div
            className="max-nav:static relative transition-all ease-in-out duration-1000 "
            onMouseEnter={() => handleMouseEnter('business')}
            onMouseLeave={() => handleMouseLeave('business')}
          >
            <div className="cursor-pointer text-sm max-nav:px-6 max-nav:text-[#494c4f] max-nav:font-helvetica max-nav:text-xl max-nav:font-semibold px-2 py-[10px]   max-nav:df-jsb-ac" onClick={() => toggleDropdown('business')}> <Link to="/business" className=''>Business </Link><span>+</span></div>

            {isOpen.business && (
              <div className="dropdown  w-52 df-fldc  df-fldc max-nav:static max-nav:w-full max-nav:rounded-none max-nav:border-none max-nav:shadow-none
               absolute bg-white border border-gray-200 rounded-lg shadow-lg">
                <RenderMultipleLinks links={businessLinks} parent="business" />
              </div>
            )}
          </div>

          {/* Resources Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => handleMouseEnter('resources')}
            onMouseLeave={() => handleMouseLeave('resources')}
          > <div className="cursor-pointer text-sm max-nav:px-6 max-nav:text-[#494c4f] max-nav:font-helvetica max-nav:text-xl max-nav:font-semibold px-2 py-[10px]  max-nav:df-jsb-ac" onClick={() => toggleDropdown('resources')}>
              <Link to="/resources" className=''>Resources </Link><span>+</span></div>
            {isOpen.resources && (
              <div className="dropdown  w-56  df-fldc max-nav:static max-nav:w-full max-nav:rounded-none max-nav:border-none max-nav:shadow-none
               absolute bg-white border border-gray-200 rounded-lg shadow-lg">
                <RenderMultipleLinks links={resourcesLinks} parent="resources" />
              </div>
            )}
          </div>

          <div className="max-nav:df-fldc" >
            <Link to="/ways-to-bank" className='
           text-sm  max-nav:text-[#494c4f] max-nav:font-helvetica max-nav:text-xl max-nav:font-semibold max-nav:py-[10px] max-nav:px-6 px-2'>Ways To Bank</Link>
            <Link to="/auth/register" className='
           text-sm  max-nav:text-[#494c4f] max-nav:font-helvetica max-nav:text-xl max-nav:font-semibold max-nav:py-[10px] max-nav:px-6 px-2'>Open Account</Link>
            <Link to="/auth/login" className='
           text-sm  max-nav:text-[#494c4f] max-nav:font-helvetica max-nav:text-xl max-nav:font-semibold max-nav:py-[10px] max-nav:px-6 px-2'>Activate Account</Link>
            <Link to="/auth/register" className='
           text-sm  max-nav:text-[#494c4f] max-nav:font-helvetica max-nav:text-xl max-nav:font-semibold max-nav:py-[10px] max-nav:px-6 px-2'>Investment Portal</Link>
            <div className='hidden max-nav:df-fldc'>
              <Link to="/about-us" className="max-nav:text-[#494c4f] max-nav:font-helvetica max-nav:text-xl max-nav:font-semibold max-nav:py-[10px] max-nav:px-6 px-2">About Us</Link>
              <Link to="/contact-us" className='max-nav:text-[#494c4f] max-nav:font-helvetica max-nav:text-xl max-nav:font-semibold max-nav:py-[10px] max-nav:px-6 px-2'>Contact Us</Link>
            </div>
          </div>

        </div>
      </div>

    </div>
  );
};

export default Top;
