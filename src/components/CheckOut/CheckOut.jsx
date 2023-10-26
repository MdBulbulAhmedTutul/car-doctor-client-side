import { useLoaderData } from "react-router-dom";
import Footer from "../Footer/Footer";
import Navbar from "../Nabbar/Navbar";
import CheckOutForm from "../checkForm/CheckOutForm";
import DetailsBanner from "../DetailsBanner/DetailsBanner";

const CheckOut = () => {
    const service = useLoaderData();
    const {title} = service;
    return (
        <div>
            <div className="max-w-7xl mx-auto px-4 mb-10">
                <Navbar></Navbar>
            </div>
            <div className="max-w-7xl mx-auto mb-16">
                <DetailsBanner></DetailsBanner>
            </div>
            <div>
                <h2>{title}</h2>
            </div>
            <div className="max-w-5xl mx-auto my-16 bg-gray-200 p-10 rounded-lg">
                <CheckOutForm></CheckOutForm>
            </div>
            <div className="bg-black">
                <div className="max-w-7xl mx-auto px-4 ">
                    <Footer></Footer>
                </div>
            </div>
        </div>
    );
};

export default CheckOut;