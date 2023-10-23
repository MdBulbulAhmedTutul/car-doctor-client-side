import About from "../About/About";
import Carosel from "../Carosel/Carosel";
import Contact from "../Contact/Contact";
import Footer from "../Footer/Footer";
import Navbar from "../Nabbar/Navbar";
import Service from "../Service/Service";
import TeamSection from "../TeamSection/TeamSection";

const Home = () => {
    return (
        <div>
            <div className="max-w-7xl mx-auto px-4">
                <Navbar></Navbar>
            </div>
            <div className="max-w-7xl mx-auto my-16">
                <Carosel></Carosel>
            </div>
            <div className="max-w-7xl mx-auto my-16 px-4">
                <h2 className="text-3xl font-bold text-center mb-7">About Us</h2>
                <About></About>
            </div>
            <div className="max-w-7xl mx-auto px-4 my-16">
                <Service></Service>
            </div>
            <div className="max-w-7xl mx-auto px-4 my-16">
                <Contact></Contact>
            </div>
            <div className="max-w-7xl mx-auto px-4 my-16">
                <TeamSection></TeamSection>
            </div>
            <div>
                <Footer></Footer>
            </div>
        </div>
    );
};

export default Home;