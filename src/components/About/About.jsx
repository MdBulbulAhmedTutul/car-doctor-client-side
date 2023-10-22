import about1 from '../../assets/images/about_us/parts.jpg';
import about2 from '../../assets/images/about_us/person.jpg'
const About = () => {
    return (
        <div className='flex flex-col lg:flex-row items-center justify-between'>
            <div className='flex-1 relative md:mb-10'>
                <img className='w-full rounded-xl' src={about2} alt="" />
                <div className='absolute -bottom-10 -right-10'>
                    <img className='lg:w-[400px] hidden md:block border-t-8 border-l-8 border-white rounded-xl' src={about1} alt="" />
                </div>
            </div>
            <div className='flex-1 lg:ml-20'>
                <h3 className='text-xl font-medium mb-2 text-[#ff3811]'>About Us</h3>
                <h2 className='text-3xl font-semibold mb-4'>We are qualified & of experience <br /> in this field</h2>
                <p className='mb-4'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable. </p>
                <p className='mb-4'>the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable. </p>
                <button className='bg-[#FF3811] text-white px-6 py-2 my-4 rounded-lg'>Get More Info</button>
            </div>
        </div>
    );
};

export default About;