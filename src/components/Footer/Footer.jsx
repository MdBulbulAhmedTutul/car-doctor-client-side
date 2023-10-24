import logo from '../../assets/logo.svg'
const Footer = () => {
    return (
        <footer className="footer p-10 text-base-content">
            <aside>
                <img src={logo} alt="" />
                <p className='text-white'>CAR Industries Ltd.<br />Providing reliable tech since 1992</p>
            </aside>
            <nav>
                <header className="footer-title text-white">About</header>
                <a className="link link-hover text-white">Branding</a>
                <a className="link link-hover text-white">Design</a>
                <a className="link link-hover text-white">Marketing</a>
                <a className="link link-hover text-white">Advertisement</a>
            </nav>
            <nav>
                <header className="footer-title text-white">Company</header>
                <a className="link link-hover text-white">About us</a>
                <a className="link link-hover text-white">Contact</a>
                <a className="link link-hover text-white">Jobs</a>
                <a className="link link-hover text-white">Press kit</a>
            </nav>
            <nav>
                <header className="footer-title text-white">Support</header>
                <a className="link link-hover text-white">Terms of use</a>
                <a className="link link-hover text-white">Privacy policy</a>
                <a className="link link-hover text-white">Cookie policy</a>
            </nav>
        </footer>
    );
};

export default Footer;