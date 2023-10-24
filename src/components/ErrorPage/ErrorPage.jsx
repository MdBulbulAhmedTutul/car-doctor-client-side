import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div className="text-center bg-gray-200 h-[100vh]">
            <h2 className="text-3xl font-bold">Opps Sorry!</h2>
            <p>No Content Upload Here</p>
            <Link to="/">
                <button className="text-white bg-[#ff3438] px-4 py-2 rounded-lg my-4">Back to Home</button>
            </Link>
        </div>
    );
};

export default ErrorPage;