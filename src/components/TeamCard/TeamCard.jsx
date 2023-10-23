import { FaFacebookF } from 'react-icons/fa';
import { BsTwitter } from 'react-icons/bs';
import { BiLogoLinkedin } from 'react-icons/bi';
import { FiInstagram } from 'react-icons/fi';
// eslint-disable-next-line react/prop-types
const TeamCard = ({ team }) => {
    // eslint-disable-next-line react/prop-types
    const { image, title, description } = team;
    return (
        <div className="border-2 border-gray-200 p-5 rounded-lg">
            <img className="w-full rounded-lg" src={image} alt="" />
            <div className='text-center'>
                <h2 className="text-xl font-semibold mt-3">{title}</h2>
                <p className="text-gray-500">{description}</p>
                <div className='flex items-center justify-center mt-4'>
                    <a href="" className='bg-sky-500 text-white text-xl p-2 rounded-full'>
                        <FaFacebookF></FaFacebookF>
                    </a>
                    <a href="" className='bg-green-500 text-white text-xl p-2 rounded-full ml-2'>
                        <BsTwitter></BsTwitter>
                    </a>
                    <a href="" className='bg-orange-500 text-white text-xl p-2 rounded-full ml-2'>
                        <BiLogoLinkedin></BiLogoLinkedin>
                    </a>
                    <a href="" className='bg-pink-500 text-white text-xl p-2 rounded-full ml-2'>
                        <FiInstagram></FiInstagram>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default TeamCard;