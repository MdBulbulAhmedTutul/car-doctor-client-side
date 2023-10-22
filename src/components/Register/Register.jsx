import { BiLogoFacebook } from "react-icons/bi";
import Navbar from "../Nabbar/Navbar";
import { AiFillGithub, AiOutlineGoogle } from "react-icons/ai";
import { Link } from "react-router-dom";
import login from '../../assets/images/login/login.svg'

const Register = () => {
    const handleRegister = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, email, password)
    }
    return (
        <div>
            <div className="max-w-7xl mx-auto px-4 mb-16">
                <Navbar></Navbar>
            </div>
            <div className="max-w-7xl mx-auto px-4 bg-gray-100 p-10 rounded-xl">
                <div className="flex items-center flex-col md:flex-row justify-between">
                    <div className="flex-1">
                        <img className="w-full h-[400px] " src={login} alt="" />
                    </div>
                    <div className="flex-1 w-full border-2 border-white p-4 ">
                        <h2 className="text-3xl font-semibold my-4">Please Register Now</h2>
                        <form onSubmit={handleRegister}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" placeholder="Name..." name="name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="Email..." className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name="password" placeholder="Password" className="input input-bordered" required />
                            </div>
                            <input className="bg-[#ff3438] w-full text-white font-semibold my-4 px-6 py-2 rounded-lg cursor-pointer" type="submit" value="Register" />
                        </form>
                        <h2 className="font-medium my-1">or sign up with</h2>
                        <div className="flex items-center my-4">
                            <BiLogoFacebook className="text-2xl bg-gray-300  rounded-full"></BiLogoFacebook>
                            <AiOutlineGoogle className="ml-3 text-2xl bg-gray-300  rounded-full"></AiOutlineGoogle>
                            <AiFillGithub className="ml-3 text-2xl bg-gray-300  rounded-full"></AiFillGithub>
                        </div>
                        <p>Already have an account <Link className="text-xl font-semibold text-[#ff3438]" to="/login">Login</Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;