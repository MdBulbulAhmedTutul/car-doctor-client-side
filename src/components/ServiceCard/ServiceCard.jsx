import { AiOutlineArrowRight } from 'react-icons/ai';
const ServiceCard = ({ service }) => {
    const { img, price, title } = service;
    console.log(service)
    return (
        <div className="border-2 border-[#E8E8E8] p-5 rounded-lg">
            <img className="w-full rounded-lg h-[200px] mb-4" src={img} alt="" />
            <h2 className="text-2xl font-semibold mb-3">{title}</h2>
            <div className='flex items-center justify-between'>
                <div>
                    <p><span className="text-xl font-semibold">Price:</span> {price}</p>
                </div>
                <div>
                    <AiOutlineArrowRight className='text-2xl text-[#FF3811]'></AiOutlineArrowRight>
                </div>
            </div>
            <button className='bg-[#ff3811] px-4 py-2 rounded-lg mt-4 text-white font-semibold'>Buy Now</button>
        </div>
    );
};

export default ServiceCard;