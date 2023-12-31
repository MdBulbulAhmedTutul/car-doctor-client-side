import About from "../About/About";
import Carosel from "../Carosel/Carosel";
import Contact from "../Contact/Contact";
import Footer from "../Footer/Footer";
import Navbar from "../Nabbar/Navbar";
import Service from "../Service/Service";
import TeamSection from "../TeamSection/TeamSection";
import CopyRight from "../copyright/CopyRight";
const Home = () => {
    return (
        <div>
            <div className="max-w-7xl mx-auto px-4">
                <Navbar></Navbar>
            </div>
            <div className="max-w-7xl mx-auto mt-10 mb-16">
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
            <div className="bg-black text-white">
                <div className="max-w-7xl mx-auto px-4">
                    <Footer></Footer>
                </div>
            </div>
            <div>
                <CopyRight></CopyRight>
            </div>
        </div>
    );
};

export default Home;