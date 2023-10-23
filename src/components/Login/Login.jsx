import Navbar from "../Nabbar/Navbar";
import login1 from '../../assets/images/login/login.svg';
import { Link } from "react-router-dom";
import { BiLogoFacebook } from 'react-icons/bi';
import { AiOutlineGoogle } from 'react-icons/ai';
import { AiFillGithub } from 'react-icons/ai';
import { useContext } from "react";
import { AuthContext } from "../Authprovider/AuthProvider";
const Login = () => {
    const {login} = useContext(AuthContext);
    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        // login
        login(email, password)
        .then(result => {
            console.log(result.user)
        })
        .catch(error =>{
            console.error(error);
        })
    }
    return (
        <div>
            <div className="max-w-7xl mx-auto px-4 mb-16">
                <Navbar></Navbar>
            </div>
            <div className="max-w-7xl mx-auto px-4 bg-gray-100 p-10 rounded-xl">
                <div className="flex items-center flex-col md:flex-row justify-between">
                    <div className="flex-1">
                        <img className="w-full h-[400px] " src={login1} alt="" />
                    </div>
                    <div className="flex-1 w-full border-2 border-white p-4 ">
                        <h2 className="text-3xl font-semibold my-4">Please Login Now</h2>
                        <form onSubmit={handleLogin}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="Email..." name="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name="password" placeholder="Password..." className="input input-bordered" required />
                            </div>
                            <input className="bg-[#ff3438] w-full text-white font-semibold px-6 py-2 my-4 rounded-lg cursor-pointer" type="submit" value="Login" />
                        </form>
                        <h2 className="font-medium my-1">or sign up with</h2>
                        <div className="flex items-center my-4">
                            <BiLogoFacebook className="text-2xl bg-gray-300  rounded-full"></BiLogoFacebook>
                            <AiOutlineGoogle className="ml-3 text-2xl bg-gray-300  rounded-full"></AiOutlineGoogle>
                            <AiFillGithub className="ml-3 text-2xl bg-gray-300  rounded-full"></AiFillGithub>
                        </div>
                        <p>Dont have an account <Link className="text-xl font-semibold text-[#ff3438]" to="/register">Register</Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;