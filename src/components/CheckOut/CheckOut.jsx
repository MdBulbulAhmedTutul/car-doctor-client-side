import { useLoaderData } from "react-router-dom";
import Footer from "../Footer/Footer";
import Navbar from "../Nabbar/Navbar";
import CheckOutForm from "../checkForm/CheckOutForm";

const CheckOut = () => {
    const service = useLoaderData();
    const {title, _id} = service;
    return (
        <div>
            <div className="max-w-7xl mx-auto px-4 mb-10">
                <Navbar></Navbar>
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