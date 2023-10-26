
import { useEffect, useState } from "react";
import ServiceCard from "../ServiceCard/ServiceCard";

const Service = () => {
    const [services, setService] = useState([]);
    
    useEffect(() =>{
        fetch('http://localhost:5000/services')
        .then(res => res.json())
        .then(data => setService(data))
    },[])
    // console.log(service)
    return (
        <div>
            <div className="text-center mb-10">
                <h2 className="text-xl font-semibold text-[#FF3811]">Service</h2>
                <h2 className="text-3xl font-bold mb-2">Our Service Area</h2>
                <p> the majority have suffered alteration in some form, by injected humour, or randomised <br /> words which do not look even slightly believable. </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {
                    services.map(service => <ServiceCard key={service._id} service={service}></ServiceCard>)
                }
            </div>
        </div>
    );
};

export default Service;