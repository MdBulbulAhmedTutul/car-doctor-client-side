import { AiOutlineClockCircle } from 'react-icons/ai';
import { BsTelephoneInbound } from 'react-icons/bs';
import { BiMap } from 'react-icons/bi';
const Contact = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 bg-black text-white p-10 rounded-xl'>
            <div className='flex items-center'>
                <div>
                    <AiOutlineClockCircle className='text-2xl'></AiOutlineClockCircle>
                </div>
                <div className='ml-5'>
                    <p className='font-semibold mb-1'>We are open monday-friday</p>
                    <h2 className='text-xl font-semibold'>7:00 am - 9:00 pm</h2>
                </div>
            </div>
            <div className='flex items-center'>
                <div>
                    <BsTelephoneInbound className='text-2xl'></BsTelephoneInbound>
                </div>
                <div className='ml-5'>
                    <p className='font-semibold mb-1'>Have a question?</p>
                    <h2 className='text-xl font-semibold'>+2546 251 2658</h2>
                </div>
            </div>
            <div className='flex items-center'>
                <div>
                    <BiMap className='text-2xl'></BiMap>
                </div>
                <div className='ml-5'>
                    <p className='font-semibold mb-1'>Need a repair? our address</p>
                    <h2 className='text-xl font-semibold'>Liza Street, New York</h2>
                </div>
            </div>
        </div>
    );
};

export default Contact;