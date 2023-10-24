import banner1 from '../../assets/images/homeCarousel/1.jpg';
import banner2 from '../../assets/images/homeCarousel/2.jpg';
import banner3 from '../../assets/images/homeCarousel/3.jpg';
import banner4 from '../../assets/images/homeCarousel/4.jpg';
const Carosel = () => {
    return (
        <div className="carousel w-full h-[80vh]">
            {/* slider 1 */}
            <div id="slide1" className="carousel-item relative w-full rounded-xl ">
                <div className='absolute w-full h-full opacity-50 bg-black rounded-xl'></div>
                <img src={banner1} className="w-full rounded-xl" />
                <div className='absolute top-40 left-20 text-white'>
                    <h2 className='text-5xl font-semibold mb-3'>Affordable <br /> Price For Car <br /> Servicing</h2>
                    <p className='mb-3'>There are many variations of passages of  available, but <br /> the majority have suffered alteration in some form</p>
                    <div className='flex items-center'>
                        <div className='bg-[#FF3811] border-2 px-5 py-2 text-white rounded-lg font-bold hover:bg-transparent hover:border-2'>
                            <button>Discover More</button>
                        </div>
                        <div className='text-white border-2 px-5 py-2 rounded-lg font-bold ml-5 hover:bg-[#FF3811]'>
                            <button>Latest Project</button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide4" className="btn btn-circle mr-5">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div>
            {/* slider 2 */}
            <div id="slide2" className="carousel-item relative w-full rounded-xl">
                <div className='absolute w-full h-full opacity-50 bg-black rounded-xl'></div>
                <img src={banner2} className="w-full rounded-xl" />
                <div className='absolute top-40 left-20 text-white'>
                    <h2 className='text-5xl font-semibold mb-3'>Affordable <br /> Price For Car <br /> Servicing</h2>
                    <p className='mb-3'>There are many variations of passages of  available, but <br /> the majority have suffered alteration in some form</p>
                    <div className='flex items-center'>
                        <div className='bg-[#FF3811] border-2 px-5 py-2 text-white rounded-lg font-bold hover:bg-transparent hover:border-2'>
                            <button>Discover More</button>
                        </div>
                        <div className='text-white border-2 px-5 py-2 rounded-lg font-bold ml-5 hover:bg-[#FF3811]'>
                            <button>Latest Project</button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide1" className="mr-5 btn btn-circle">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div>
            {/* slider 3 */}
            <div id="slide3" className="carousel-item relative w-full rounded-xl">
                <div className='absolute w-full h-full opacity-50 bg-black rounded-xl'></div>
                <img src={banner3} className="w-full rounded-xl" />
                <div className='absolute top-40 left-20 text-white'>
                    <h2 className='text-5xl font-semibold mb-3'>Affordable <br /> Price For Car <br /> Servicing</h2>
                    <p className='mb-3'>There are many variations of passages of  available, but <br /> the majority have suffered alteration in some form</p>
                    <div className='flex items-center'>
                        <div className='bg-[#FF3811] border-2 px-5 py-2 text-white rounded-lg font-bold hover:bg-transparent hover:border-2'>
                            <button>Discover More</button>
                        </div>
                        <div className='text-white border-2 px-5 py-2 rounded-lg font-bold ml-5 hover:bg-[#FF3811]'>
                            <button>Latest Project</button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide2" className="mr-5 btn btn-circle">❮</a>
                    <a href="#slide4" className="btn btn-circle">❯</a>
                </div>
            </div>
            {/* slider 4 */}
            <div id="slide4" className="carousel-item relative w-full rounded-xl">
                <div className='absolute w-full h-full opacity-50 bg-black rounded-xl'></div>
                <img src={banner4} className="w-full rounded-xl" />
                <div className='absolute top-40 left-20 text-white'>
                    <h2 className='text-5xl font-semibold mb-3'>Affordable <br /> Price For Car <br /> Servicing</h2>
                    <p className='mb-3'>There are many variations of passages of  available, but <br /> the majority have suffered alteration in some form</p>
                    <div className='flex items-center'>
                        <div className='bg-[#FF3811] border-2 px-5 py-2 text-white rounded-lg font-bold hover:bg-transparent hover:border-2'>
                            <button>Discover More</button>
                        </div>
                        <div className='text-white border-2 px-5 py-2 rounded-lg font-bold ml-5 hover:bg-[#FF3811]'>
                            <button>Latest Project</button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide3" className="mr-5 btn btn-circle">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div>
        </div>
    );
};

export default Carosel;