import LearnMore from '../reusables/LearnMore'
import ReUsableMiddleSections from '../reusables/ReUsableMiddleSections'
import img from "../assets/wab.jpg"
import { faUserCheck, faUserClock } from '@fortawesome/free-solid-svg-icons'
import { faUserPlus } from '@fortawesome/free-solid-svg-icons/faUserPlus'
const WaysToBank = () => {
  return (
    <>
      <div className="relative df-ac">
        <div className="img">
          <picture>
            <img
              src={img}
              alt="hero-bg"
              className="w-screen object-center object-cover"
              style={{ height: "60vh" }}
            />
          </picture>
        </div>
        <div className="absolute pl-20 df-fldc-jc bg-black bg-opacity-75 h-full w-full">
          <h1 className="text-4xl font-helvetica  text-green-50 pb-6">Online Banking</h1>
          <p className="text-[#7a7a7a] text-base font-helvetica">Help is available. Contact Us anytime and we are always happy to help.</p>
        </div>
      </div>
      <ReUsableMiddleSections data={{
        heading: 'Stuck with online banking?',
        subheading: 'All you need to know about using Online Banking.',
        title: 'Easy Steps to Have an account with Us.',
        body: [
          { icon:faUserPlus, body: "Use the Online Banking Button In the menu. and Click on Create account after page is loaded.", heading: "Create Account" },
          { icon:faUserClock, body: "Activate your account. Contact the bank for your activation code.", heading: "Activate Account" },
          { icon:faUserCheck, body: "Login and start using our unlimited Features streamlined to satisfy your needs.", heading: "Login" }
        ]
      }} />
      <LearnMore text={'Internet Banking'} />
    </>)
}

export default WaysToBank