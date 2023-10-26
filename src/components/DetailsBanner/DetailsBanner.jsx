import banner from '../../assets/images/checkout/checkout.png';
const DetailsBanner = () => {
    return (
        <div>
            <div className='relative'>
                <img className='w-full' src={banner} alt="" />
                <h2 className='absolute text-3xl font-bold top-40 text-white left-6'>CheckOut</h2>
                <span className='bg-[#ff3438] px-5 py-2 absolute left-[45%] bottom-0 text-white text-xl font-semibold rounded-tl-xl rounded-tr-xl'>Home/Checkout</span>
            </div>
        </div>
    );
};

export default DetailsBanner;