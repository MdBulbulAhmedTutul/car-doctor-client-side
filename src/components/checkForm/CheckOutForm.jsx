import { useContext } from "react";
import { AuthContext } from "../Authprovider/AuthProvider";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const CheckOutForm = () => {
    const service = useLoaderData();
    const { title, _id, price, img } = service;
    const { user } = useContext(AuthContext);
    const handleCheckOutForm = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const date = form.date.value;
        const phone = form.phone.value;
        const email = form.email.value;
        const order = {
            customeerName: name,
            date,
            email,
            phone,
            service: _id,
            price,
            title,
            img
        }
        console.log(order);
        fetch('http://localhost:5000/bookings', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(order)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    Swal.fire('Success full booking!')
                }
            })

    }
    return (
        <div>
            <form onSubmit={handleCheckOutForm}>
                <div className="flex flex-col lg:flex-row items-center">
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">First Name</span>
                        </label>
                        <input type="text" defaultValue={user?.displayName} placeholder="Name" name="name" className="input input-bordered" required />
                    </div>
                    <div className="form-control w-full ml-4">
                        <label className="label">
                            <span className="label-text">Date</span>
                        </label>
                        <input type="date" placeholder="Date" name="date" className="input input-bordered" required />
                    </div>
                </div>
                <div className="flex flex-col lg:flex-row items-center">
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Your Phone</span>
                        </label>
                        <input type="number" placeholder="Your Phone" name="phone" className="input input-bordered" required />
                    </div>
                    <div className="form-control w-full ml-4">
                        <label className="label">
                            <span className="label-text">Your Email</span>
                        </label>
                        <input type="email" defaultValue={user?.email} placeholder="Your Email" name="email" className="input input-bordered" required />
                    </div>
                </div>
                <input type="submit" value="Order Confirm" className="w-full my-4 px-4 py-2 text-white font-semibold rounded-lg cursor-pointer bg-[#ff3438]" />
            </form>
        </div>
    );
};

export default CheckOutForm;