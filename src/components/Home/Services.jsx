import { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";

const Services = () => {

    const [services , setServices] = useState([]);
    useEffect(() => {
        fetch('http://localhost:3000/services')
        .then(res => res.json())
        .then(data => setServices(data))
    }, []);

    return (
        <div className="my-20">
            <div className="text-center">
                <h3 className="text-orange-600 font-bold mb-4">Service</h3>
                <h2 className="text-4xl font-bold mb-4">Our Service Area</h2>
                <p className="w-2/4 mx-auto">The majority have suffered alteration in some form, by injected humour, or randomised words which don&apost look even slightly believable. </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
                {
                    services.map(service => <ServiceCard key={service._id} service={service}></ServiceCard>)
                }
            </div>
        </div>
    );
};

export default Services;