
const CheckOutForm = () => {
    return (
        <div>
            <form>
                <div className="flex flex-col lg:flex-row items-center">
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">First Name</span>
                        </label>
                        <input type="text" placeholder="First Name" name="lastName" className="input input-bordered" required />
                    </div>
                    <div className="form-control w-full ml-4">
                        <label className="label">
                            <span className="label-text">Last Name</span>
                        </label>
                        <input type="text" placeholder="Last Name" name="lastName" className="input input-bordered" required />
                    </div>
                </div>
                <div className="flex flex-col lg:flex-row items-center">
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Your Phone</span>
                        </label>
                        <input type="text" placeholder="Your Phone" name="phone" className="input input-bordered" required />
                    </div>
                    <div className="form-control w-full ml-4">
                        <label className="label">
                            <span className="label-text">Your Email</span>
                        </label>
                        <input type="email" placeholder="Your Email" name="email" className="input input-bordered" required />
                    </div>
                </div>
                <input type="submit" value="Order Confirm" className="w-full my-4 px-4 py-2 text-white font-semibold rounded-lg cursor-pointer bg-[#ff3438]" />
            </form>
        </div>
    );
};

export default CheckOutForm;