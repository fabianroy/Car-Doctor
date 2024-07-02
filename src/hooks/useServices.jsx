import { useEffect, useState } from "react";
import { axiosSecure } from "./useAxiosSecure";

const useServices = (asc, search) => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        // fetch('http://localhost:3000/services')
        //     .then(res => res.json())
        //     .then(data => setServices(data))
        axiosSecure(`/services?sort=${asc ? 'asc' : 'desc'}&search=${search}`)
            .then(res => setServices(res.data))
            .catch(err => console.log(err))
    }, [asc, search])
    return services;
};

export default useServices;