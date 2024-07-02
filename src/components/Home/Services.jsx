import { useState } from "react";
import useServices from "../../hooks/useServices";
import ServiceCard from "./ServiceCard";

const Services = () => {

    const [asc, setAsc] = useState(true);
    const [search, setSearch] = useState('');
    // const [min, setMin] = useState(undefined);
    // const [max, setMax] = useState(undefined);

    // DRY Principle: Don't Repeat Yourself
    const services = useServices(asc, search); 

    const handleSearch = (e) => {
        e.preventDefault();
        const searchText = e.target.search.value;
        setSearch(searchText);
    }

    return (
        <div className="my-20">
            <div className="text-center">
                <div>
                    <h3 className="text-orange-600 font-bold mb-4">Service</h3>
                <h2 className="text-4xl font-bold mb-4">Our Service Area</h2>
                <p className="w-2/4 mx-auto">The majority have suffered alteration in some form, by injected humour, or randomised words which don&apost look even slightly believable. </p>
                </div>

        <form className="my-5 flex justify-center items-center gap-2" onSubmit={handleSearch}>
            <input className="border-2 rounded-lg p-2" type="text" name="search" id="" />
            <input className="btn bg-orange-500 text-white" type="submit" value='search'/>
        </form>

                <button onClick={() => setAsc(!asc)} className="btn my-5">{ asc ? 'Price : Low To High' : 'Price : High To Low' }</button>
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