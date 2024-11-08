import { Link } from 'react-router-dom'; // Corrected import
import { BsArrowLeft } from 'react-icons/bs';

const BackButton = ({ destination = '/' }) => {
  return (
    <div className='flex'>
      <Link to={destination} className='bg-sky-800 text-white px-4 py-1 rounded-lg w-fit flex items-center'>
        <BsArrowLeft className='text-2xl mr-2' />
        <span>Back</span>
      </Link>
    </div>
  );
};

export default BackButton;
