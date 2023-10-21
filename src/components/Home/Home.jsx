import Footer from "../Footer/Footer";
import Navbar from "../Nabbar/Navbar";

const Home = () => {
    return (
        <div>
            <div className="max-w-7xl mx-auto px-4">
                <Navbar></Navbar>
            </div>
            <h2>This is Home Page</h2>
            <div>
                <Footer></Footer>
            </div>
        </div>
    );
};

export default Home;