import Carosel from "../Carosel/Carosel";
import Footer from "../Footer/Footer";
import Navbar from "../Nabbar/Navbar";

const Home = () => {
    return (
        <div>
            <div className="max-w-7xl mx-auto px-4">
                <Navbar></Navbar>
            </div>
            <div className="max-w-7xl mx-auto my-16">
                <Carosel></Carosel>
            </div>
            <div>
                <Footer></Footer>
            </div>
        </div>
    );
};

export default Home;