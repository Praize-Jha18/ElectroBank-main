import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom';
const UserNavbar = (props: { header: string }) => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-sky-500 flex items-center h-16 px-8 fixed w-full font-poppins justify-between">
        <button onClick={() => { navigate(-1); }}>
          <FontAwesomeIcon icon={faChevronLeft} className='text-white' />
        </button>
        <div className="flex justify-center flex-grow">
          <p className='text-white text-lg'>{props.header}</p>
        </div>
      </div>
    </>
  );
};
export default UserNavbar