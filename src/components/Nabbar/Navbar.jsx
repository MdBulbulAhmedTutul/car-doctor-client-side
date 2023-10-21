import { Link, NavLink } from 'react-router-dom';
import logo from '../../assets/logo.svg';
import { BsSearch } from 'react-icons/bs';
import { AiOutlineShoppingCart } from 'react-icons/ai';

const Navbar = () => {
    const navItem = <>
        <li><NavLink to="/">Home</NavLink></li>
        <li className='ml-2'><NavLink to="/about">About</NavLink></li>
        <li className='ml-2'><NavLink to="/service">Service</NavLink></li>
        <li className='ml-2'><NavLink to="/blog">Blog</NavLink></li>
        <li className='ml-2'><NavLink to="/contact">Contact</NavLink></li>
    </>
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navItem}
                    </ul>
                </div>
                <Link to="/">
                    <img className='w-[80px] hidden md:block lg:block' src={logo} alt="" />
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navItem}
                </ul>
            </div>
            <div className="navbar-end">
                <div className='flex items-center'>
                    <div className='flex items-center'>
                        <AiOutlineShoppingCart className='text-2xl'></AiOutlineShoppingCart>
                        <BsSearch className='ml-4 text-2xl'></BsSearch>
                    </div>
                    <div className='ml-5'>
                        <button className='text-[#FF3811] border-2 px-6 py-2 rounded-lg'>Appointment</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;